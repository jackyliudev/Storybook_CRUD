M.Sidenav.init(document.querySelector('.sidenav'))
M.FormSelect.init(document.querySelector('#status'))

//name of field to replace
// textarea in add.hbs has name of body so replace that body
CKEDITOR.replace('body', {
    plugins: 'wysiwygarea, toolbar, basicstyles, link'
}) 
