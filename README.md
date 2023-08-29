# To-Do List App

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
