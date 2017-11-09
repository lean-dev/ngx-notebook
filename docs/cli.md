## Angular CLI

### Projekt Creation

    ng new --routing ngx-notebook
    
Bei der Generierung des Projektes durch die Angular CLI wurde die Option ```--routing``` gesetzt, um den Angular
Router mit einzubinden - siehe das ```AppRoutingModule``` in der Datei ```src/app/app-routing.module.ts```.

Weitere Optionen des new-Kommandos sind:

* ```--skip-commiz```: Initialen git commit unterbinden

TODO: list all options

### CLI Anpassungen

* App-Prefix entfernen
* Default CSS Preprocessor wählen, falls gewünscht

### Modules

Feature-Module werden ebenso mit der Option ```--routing``` erzeugt:

    ng g m --routing todos

### Components

Bei der Komponenten-Erzeugung immer dran denken das Module zu setzen und den Pfad mitzugeben:

    ng g c -m todos todos/todo-app

