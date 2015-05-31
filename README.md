# w2w.widgets
Angular widgets 

This module contains AngularJS 1.x widgets. It has the following directives:

  - row select
  - Inifinte scroll

## row select
The row select directive provides a windows explorer file/folder selection. By clicking an item in a list, the item will be selected. When the control key is being pressed while selecting multiple rows, each row will be selected (or unselected). When the shift key is pressed, all the items between the initial selected item and the last clicked item will be selected.

It stores the row indices in an array which can be used in the scope.

### Installation

Download the source.  
Include the w2w.widgets.js in your index file  
Add the w2w.widgets to your module  
Add the `row-select` directive to any type of element that has ngRepeat  
Add the `selected-indices` attribute to bind the selected indices to a local array

### Example
I created a simple [Pen](http://codepen.io/Donniewiko/pen/EjNMVE) where you can click, control click, shift click and control shift click all you want.

## Infinite scroll
The infinite scroll directive adds infinite scroll behaviour to any element. All you need to do is add the infinite-scroll to your element and provide a method to add items to the list.

### Installation
Download the source.  
Include the w2w.widgets.js in your index file  
Add the w2w.widgets to your module  
Add the `infinite-scroll` to any element  
Add the `add-items` attribute which will be called when the element is at the bottom of its scrolling region

### Example
I created a simple [Pen](http://codepen.io/Donniewiko/pen/ZYNYxL) where you can see how to setup the list