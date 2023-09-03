# To-Do List App

## Home http://localhost:3000

## Settings http://localhost:3000/settings

## To access the settings, click [Settings Page](http://localhost:3000/settings).

## UML Diagram

### startUML

class ToDo {
    
  - defaultValues: Object
  - list: Array
  - incomplete: Number
  - currentPage: Number
  - showHidden: Boolean
  
}

class List {

  - items: Array
  - toggleComplete(id: String)

}

App --> ToDo
App --> SettingsContext
ToDo --> List : items

### endUML
