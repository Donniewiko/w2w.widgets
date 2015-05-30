# w2w.widgets
Angular widgets 

This module contains AngularJS 1.x widgets. It has the following directives:

  - row select

### row select
The row select directive provides a windows explorer file/folder selection. By clicking an item in a list, the item will be selected. When the control key is being pressed while selecting multiple rows, each row will be selected (or unselected). When the shift key is pressed, all the items between the initial selected item and the last clicked item will be selected.

It stores the row indices in an array which can be used in the scope.

### Installation

Download the source.  
Include the w2w.widgets.js in your index file  
Add the w2w.widgets to your module  
Add the row-select directive to any type of element that has ngRepeat  
Add the selected-indices attribute to get the selected indices

### Example
I created a simple [Pen](http://codepen.io/Donniewiko/pen/EjNMVE) where you can click, control click, shift click and control shift click all you want.
