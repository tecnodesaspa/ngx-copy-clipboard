# NgxCopyClipboard


Angular NgxCopyClipboard es un proyecto en el que podrás copiar de forma simple un texto al portapapeles en tus proyectos


## Instalación

```
npm i ngx-copy-clipboard
```


## Uso

```
import { NgxCopyClipboardModule } from 'ngx-copy-clipboard'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgxCopyClipboardModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Component ngx-copy-clipboard

Código HTML
```
<ngx-copy-clipboard text="npm i ngx-copy-clipboard"></ngx-copy-clipboard>
```


## Propiedades
| Nombre  | Tipo  | Descripción |
| ------------ | --------------- | --------------- |
| text     |  Input  | Texto para copiar. |
| styles      |  Input  |  Estilos de CSS |
| cssClass |  Input  |  Clase de CSS (declarada en style.css o style.scss) |
| copyText |  Output  |  Función que se ejecuta cuando copia en portapapeles |


## Version
| Angular  | NgxCopyClipboard  |
| ------------ | --------------- |
| 16.x.x |  1  |
| 17.x.x |  2  |
| 18.x.x |  3  |