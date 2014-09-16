/**
 * adapt-strap
 * @version v1.0.2 - 2014-09-16
 * @link https://github.com/Adaptv/adapt-strap
 * @author Kashyap Patel (kashyap@adap.tv)
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
(function(window, document, undefined) {
'use strict';

// Source: loadingindicator.tpl.js
angular.module('adaptv.adaptStrap.loadingindicator').run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('loadingindicator/loadingindicator.tpl.html', '<div class="ad-loading-overlay-container" ng-class="containerClasses" ng-style="{\'z-index\': zIndex || \'1000\',\'position\': position || \'absolute\'}" ng-show="loading"><div class="wrapper"><div class="loading-indicator"><ad-loading-icon loading-icon-size="{{ loadingIconSize }}" loading-icon-class="{{ loadingIconClass }}"></ad-loading-icon></div></div></div>');
  }
]);

// Source: infinitedropdown.tpl.js
angular.module('adaptv.adaptStrap.infinitedropdown').run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('infinitedropdown/infinitedropdown.tpl.html', '<div class="ad-infinite-list-container"><div class="dropdown"><button class="%=btnClasses% dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown"><span ng-if="!%=dropdownName%.localConfig.dynamicLabel || !%=dropdownName%.selectedItems.length">{{ %=dropdownName%.localConfig.initialLabel }}</span> <span ng-if="%=dropdownName%.localConfig.dynamicLabel && %=dropdownName%.selectedItems.length">{{ %=dropdownName%.readProperty(%=dropdownName%.selectedItems[%=dropdownName%.selectedItems.length - 1], \'%=labelDisplayProperty%\') }}</span> <span class="caret"></span></button><ul class="dropdown-menu" ng-style="%=dropdownName%.localConfig.dimensions" role="menu" aria-labelledby="dropdownMenu1"><li class="text-overflow" data-ng-repeat="item in %=dropdownName%.items.list" ng-class="{\'active\': %=dropdownName%.isSelected(item, %=dropdownName%.selectedItems)}" ng-click="%=dropdownName%.addRemoveItem($event, item, %=dropdownName%.selectedItems)"><a role="menuitem" tabindex="-1" href=""><span ng-if="%=dropdownName%.localConfig.showDisplayProperty">{{ %=dropdownName%.readProperty(item, \'%=displayProperty%\') }}</span> <span ng-if="%=dropdownName%.localConfig.showTemplate" ad-compile-template="%=template%"></span> <span ng-if="%=dropdownName%.localConfig.loadTemplate" ng-include="\'%=templateUrl%\'"></span></a></li><li ng-if="%=dropdownName%.localConfig.loadingData" class="text-overflow text-center" style="display: block"><a role="menuitem" tabindex="-1" href=""><ad-loading-icon></ad-loading-icon></a></li></ul></div></div>');
  }
]);

// Source: tableajax.tpl.js
angular.module('adaptv.adaptStrap.tableajax').run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('tableajax/tableajax.tpl.html', '<div class="ad-table-ajax-container"><table class="%=tableClasses% ad-sticky-table" ng-if="%=tableName%.localConfig.tableMaxHeight"><tr class="ad-user-select-none"><th data-ng-repeat="definition in %=columnDefinition%" ng-click="%=tableName%.sortByColumn(definition)" ng-class="{\'ad-cursor-pointer\': definition.sortKey}" ng-style="{\'width\': definition.width}"><div class="pull-right" ng-if="definition.sortKey && %=tableName%.localConfig.predicate == definition.sortKey"><i class="%=icon-sortAscending%" ng-hide="%=tableName%.localConfig.reverse"></i> <i class="%=icon-sortDescending%" ng-show="%=tableName%.localConfig.reverse"></i></div><div class="pull-right" ng-if="definition.sortKey && %=tableName%.localConfig.predicate != definition.sortKey"><i class="%=icon-sortable%"></i></div><div ng-if="definition.columnHeaderTemplate" ng-bind-html="definition.columnHeaderTemplate"></div><div ng-if="definition.columnHeaderDisplayName" ng-bind="definition.columnHeaderDisplayName"></div></th></tr></table><div class="ad-table-container" ng-style="{\'max-height\': %=tableName%.localConfig.tableMaxHeight}"><table class="%=tableClasses%"><tr class="ad-user-select-none" ng-if="!%=tableName%.localConfig.tableMaxHeight"><th data-ng-repeat="definition in %=columnDefinition%" ng-click="%=tableName%.sortByColumn(definition)" ng-class="{\'ad-cursor-pointer\': definition.sortKey}" ng-style="{\'width\': definition.width}"><div class="pull-right" ng-if="definition.sortKey && %=tableName%.localConfig.predicate == definition.sortKey"><i class="%=icon-sortAscending%" ng-hide="%=tableName%.localConfig.reverse"></i> <i class="%=icon-sortDescending%" ng-show="%=tableName%.localConfig.reverse"></i></div><div class="pull-right" ng-if="definition.sortKey && %=tableName%.localConfig.predicate != definition.sortKey"><i class="%=icon-sortable%"></i></div><div ng-if="definition.columnHeaderTemplate" ng-bind-html="definition.columnHeaderTemplate"></div><div ng-if="definition.columnHeaderDisplayName" ng-bind="definition.columnHeaderDisplayName"></div></th></tr><tr data-ng-repeat="item in %=tableName%.items.list"><td data-ng-repeat="definition in %=columnDefinition%" ng-style="{\'width\': definition.width}"><div ng-if="definition.templateUrl"><ng-include src="definition.templateUrl"></ng-include></div><div ng-if="definition.template"><span ad-compile-template="definition.template"></span></div><div ng-if="!definition.templateUrl && !definition.template">{{ %=tableName%.applyFilter(%=tableName%.readProperty(item, definition.displayProperty), definition.cellFilter) }}</div></td></tr></table><ad-loading-overlay loading="%=tableName%.localConfig.loadingData"></ad-loading-overlay></div><div class="row"><div class="col-md-8 col-sm-8"><div class="%=paginationBtnGroupClasses% pull-left" ng-show="%=tableName%.items.paging.totalPages > 1"><button type="button" class="btn btn-default" ng-click="%=tableName%.loadPage(1)" ng-disabled="%=tableName%.items.paging.currentPage == 1"><i class="%=icon-firstPage%"></i></button> <button type="button" class="btn btn-default" ng-click="%=tableName%.loadPreviousPage()" ng-disabled="%=tableName%.items.paging.currentPage == 1"><i class="%=icon-previousPage%"></i></button> <button type="button" class="btn btn-default" ng-repeat="page in %=tableName%.localConfig.pagingArray" ng-class="{active: %=tableName%.items.paging.currentPage == page}" ng-click="%=tableName%.loadPage(page)">{{ page }}</button> <button type="button" class="btn btn-default" ng-click="%=tableName%.loadNextPage()" ng-disabled="%=tableName%.items.paging.currentPage == %=tableName%.items.paging.totalPages"><i class="%=icon-nextPage%"></i></button> <button type="button" class="btn btn-default" ng-click="%=tableName%.loadLastPage()" ng-disabled="%=tableName%.items.paging.currentPage == %=tableName%.items.paging.totalPages"><i class="%=icon-lastPage%"></i></button></div></div><div class="col-md-4 col-sm-4"><div class="%=paginationBtnGroupClasses% pull-right"><button type="button" class="btn btn-default" ng-repeat="size in %=tableName%.items.paging.pageSizes" ng-class="{active: %=tableName%.items.paging.pageSize == size}" ng-click="%=tableName%.pageSizeChanged(size)">{{ size }}</button></div></div></div></div>');
  }
]);

// Source: tablelite.tpl.js
angular.module('adaptv.adaptStrap.tablelite').run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('tablelite/tablelite.tpl.html', '<div class="ad-table-lite-container"><table class="%=tableClasses% ad-sticky-table" ng-if="%=tableName%.localConfig.tableMaxHeight"><tr class="ad-user-select-none"><th ng-if="%=tableName%.localConfig.draggable" class="ad-select-cell"><i></i></th><th ng-if="%=tableName%.localConfig.selectable && %=tableName%.items.allItems" class="ad-select-cell"><input type="checkbox" class="ad-cursor-pointer" ng-click="%=tableName%.addRemoveAll(%=tableName%.items.allItems, %=tableName%.selectedItems)" ng-checked="%=tableName%.allSelected(%=tableName%.items.allItems, %=tableName%.selectedItems)"></th><th data-ng-repeat="definition in %=columnDefinition%" ng-click="%=tableName%.sortByColumn(definition)" ng-class="{\'ad-cursor-pointer\': definition.sortKey}" ng-style="{\'width\': definition.width}"><div class="pull-right" ng-if="definition.sortKey && %=tableName%.localConfig.predicate == definition.sortKey"><i class="%=icon-sortAscending%" ng-hide="%=tableName%.localConfig.reverse"></i> <i class="%=icon-sortDescending%" ng-show="%=tableName%.localConfig.reverse"></i></div><div class="pull-right" ng-if="definition.sortKey && %=tableName%.localConfig.predicate != definition.sortKey"><i class="%=icon-sortable%"></i></div><div ng-if="definition.columnHeaderTemplate" ng-bind-html="definition.columnHeaderTemplate"></div><div ng-if="definition.columnHeaderDisplayName" ng-bind="definition.columnHeaderDisplayName"></div></th></tr></table><div class="ad-table-container" ng-style="{\'max-height\': %=tableName%.localConfig.tableMaxHeight}"><table class="%=tableClasses%"><tr class="ad-user-select-none" ng-if="!%=tableName%.localConfig.tableMaxHeight"><th ng-if="%=tableName%.localConfig.draggable" class="ad-select-cell"><i></i></th><th ng-if="%=tableName%.localConfig.selectable && %=tableName%.items.allItems" class="ad-select-cell"><input type="checkbox" class="ad-cursor-pointer" ng-click="%=tableName%.addRemoveAll(%=tableName%.items.allItems, %=tableName%.selectedItems)" ng-checked="%=tableName%.allSelected(%=tableName%.items.allItems, %=tableName%.selectedItems)"></th><th data-ng-repeat="definition in %=columnDefinition%" ng-click="%=tableName%.sortByColumn(definition)" ng-class="{\'ad-cursor-pointer\': definition.sortKey}" ng-style="{\'width\': definition.width}"><div class="pull-right" ng-if="definition.sortKey && %=tableName%.localConfig.predicate == definition.sortKey"><i class="%=icon-sortAscending%" ng-hide="%=tableName%.localConfig.reverse"></i> <i class="%=icon-sortDescending%" ng-show="%=tableName%.localConfig.reverse"></i></div><div class="pull-right" ng-if="definition.sortKey && %=tableName%.localConfig.predicate != definition.sortKey"><i class="%=icon-sortable%"></i></div><div ng-if="definition.columnHeaderTemplate" ng-bind-html="definition.columnHeaderTemplate"></div><div ng-if="definition.columnHeaderDisplayName" ng-bind="definition.columnHeaderDisplayName"></div></th></tr><tr ng-if="!%=tableName%.localConfig.draggable" data-ng-repeat="item in %=tableName%.items.list" ng-class="{\'ad-selected\': %=tableName%.localConfig.selectable && %=tableName%.isSelected(item, %=tableName%.selectedItems)}"><td ng-if="%=tableName%.localConfig.selectable" class="ad-select-cell"><input type="checkbox" class="ad-cursor-pointer" ng-checked="%=tableName%.isSelected(item, %=tableName%.selectedItems)" ng-click="%=tableName%.addRemoveItem(item, %=tableName%.selectedItems)"></td><td data-ng-repeat="definition in %=columnDefinition%" ng-style="{\'width\': definition.width}"><div ng-if="definition.templateUrl"><ng-include src="definition.templateUrl"></ng-include></div><div ng-if="!definition.templateUrl">{{ %=tableName%.applyFilter(item[definition.displayProperty], definition.cellFilter) }}</div></td></tr><tr ng-if="%=tableName%.localConfig.draggable" ad-drag="true" ad-drag-handle="true" ad-drop="true" ad-drag-data="" ad-drop-over="%=tableName%.onDragOver($data, $dragElement, $dropElement, $event)" ad-drop-end="%=tableName%.onDropEnd($data, $dragElement, $dropElement, $event)" ad-drag-begin="%=tableName%.onDragStart($data, $dragElement, $event)" ad-drag-end="%=tableName%.onDragEnd($data, $dragElement, $event)" data-ng-repeat="item in %=tableName%.items.list" ng-class="{\'ad-selected\': %=tableName%.localConfig.selectable && %=tableName%.isSelected(item, %=tableName%.selectedItems)}"><td ng-if="%=tableName%.localConfig.draggable" class="ad-select-cell ad-drag-handle"><i class="%=icon-draggable%"></i></td><td ng-if="%=tableName%.localConfig.selectable" class="ad-select-cell"><input type="checkbox" class="ad-cursor-pointer" ng-checked="%=tableName%.isSelected(item, %=tableName%.selectedItems)" ng-click="%=tableName%.addRemoveItem(item, %=tableName%.selectedItems)"></td><td data-ng-repeat="definition in %=columnDefinition%" ng-style="{\'width\': definition.width}"><div ng-if="definition.templateUrl"><ng-include src="definition.templateUrl"></ng-include></div><div ng-if="definition.template"><span ad-compile-template="definition.template"></span></div><div ng-if="!definition.templateUrl && !definition.template">{{ %=tableName%.applyFilter(%=tableName%.readProperty(item, definition.displayProperty), definition.cellFilter) }}</div></td></tr></table></div><div class="row" ng-if="%=tableName%.items.allItems.length > %=tableName%.items.paging.pageSizes[0] && %=tableName%.localConfig.showPaging"><div class="col-md-8 col-sm-8"><div class="%=paginationBtnGroupClasses% pull-left"><button type="button" class="btn btn-default" ng-click="%=tableName%.loadPage(1)" ng-disabled="%=tableName%.items.paging.currentPage == 1"><i class="%=icon-firstPage%"></i></button> <button ng-if="!%=tableName%.localConfig.draggable" type="button" class="btn btn-default" ng-click="%=tableName%.loadPreviousPage()" ng-disabled="%=tableName%.items.paging.currentPage == 1"><i class="%=icon-previousPage%"></i></button> <button ng-if="%=tableName%.localConfig.draggable" type="button" id="btnPrev" class="btn btn-default" ad-drop="true" ad-drop-over="%=tableName%.onNextPageButtonOver($data, $dragElement, $dropElement, $event)" ad-drop-end="%=tableName%.onNextPageButtonDrop($data, $dragElement, $dropElement, $event)" ng-click="%=tableName%.loadPreviousPage()" ng-disabled="%=tableName%.items.paging.currentPage == 1"><i class="%=icon-previousPage%"></i></button> <button type="button" class="btn btn-default" ng-repeat="page in %=tableName%.localConfig.pagingArray" ng-class="{active: %=tableName%.items.paging.currentPage == page}" ng-click="%=tableName%.loadPage(page)">{{ page }}</button> <button ng-if="!%=tableName%.localConfig.draggable" type="button" class="btn btn-default" ng-click="%=tableName%.loadNextPage()" ng-disabled="%=tableName%.items.paging.currentPage == %=tableName%.items.paging.totalPages"><i class="%=icon-nextPage%"></i></button> <button ng-if="%=tableName%.localConfig.draggable" type="button" id="btnNext" ad-drop="true" ad-drop-over="%=tableName%.onNextPageButtonOver($data, $dragElement, $dropElement, $event)" ad-drop-end="%=tableName%.onNextPageButtonDrop($data, $dragElement, $dropElement, $event)" class="btn btn-default" ng-click="%=tableName%.loadNextPage()" ng-disabled="%=tableName%.items.paging.currentPage == %=tableName%.items.paging.totalPages"><i class="%=icon-nextPage%"></i></button> <button type="button" class="btn btn-default" ng-click="%=tableName%.loadLastPage()" ng-disabled="%=tableName%.items.paging.currentPage == %=tableName%.items.paging.totalPages"><i class="%=icon-lastPage%"></i></button></div></div><div class="col-md-4 col-sm-4"><div class="%=paginationBtnGroupClasses% pull-right"><button type="button" class="btn btn-default" ng-repeat="size in %=tableName%.items.paging.pageSizes" ng-class="{active: %=tableName%.items.paging.pageSize == size}" ng-click="%=tableName%.pageSizeChanged(size)">{{ size }}</button></div></div></div></div>');
  }
]);

// Source: treebrowser.tpl.js
angular.module('adaptv.adaptStrap.treebrowser').run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('treebrowser/treebrowser.tpl.html', '<div class="ad-tree-browser-container" ng-class="{\'tree-bordered\': %=bordered%}"><div id="segment-tree" data-level="0" class="tree-view"><div class="tree"><script type="text/ng-template" id="%=treeName%-tree-renderer.html"><div class="content" ng-style="{\'padding-left\': level * %=childrenPadding% + \'px\'}"\n' + '                     ng-class="%=rowNgClass%">\n' + '                    <div class="content-holder">\n' + '                        <div class="toggle">\n' + '                            <!--todo: create a callback api to handle the expand and collapse functions-->\n' + '                            <i ng-show="!item._ad_expanded && %=treeName%.hasChildren(item) && !item._ad_loading"\n' + '                               class="%=icon-expand%" ng-click="%=treeName%.toggle($event,item)"></i>\n' + '                            <i ng-show="item._ad_expanded && !item._ad_loading"\n' + '                               class="%=icon-collapse%" ng-click="%=treeName%.toggle($event,item)"></i>\n' + '                            <span ng-show="item._ad_loading">\n' + '                                <i class="%=icon-loadingSpinner%"></i>\n' + '                            </span>\n' + '                        </div>\n' + '                        <div class="node-content">\n' + '                            <!--this is the template supplied as an attribute.-->\n' + '                            %=nodeTemplate%\n' + '                        </div>\n' + '                    </div>\n' + '                </div>\n' + '                <div ng-show="item._ad_expanded">\n' + '                    <div ng-repeat="item in item.%=childNodeName%" class="tree-level tree-sub-level"\n' + '                         ng-include="\'%=treeName%-tree-renderer.html\'" onLoad="level=level+1">\n' + '                    </div>\n' + '                </div></script><div><div class="tree-level tree-header-level border" ng-show="%=treeName%.localConfig.showHeader"><div class="content" ng-style="{\'padding-left\': %=childrenPadding% + \'px\'}"><div class="content-holder"><div class="toggle"></div><div class="node-content ad-user-select-none">%=nodeHeaderTemplate%</div></div></div></div><div class="tree-level tree-top-level border" ng-repeat="item in %=treeRootName%.%=childNodeName%" ng-include="\'%=treeName%-tree-renderer.html\'" onload="level = 1"></div></div></div></div></div>');
  }
]);


})(window, document);
