const express = require('express')
const app = express()
const port = 3000
var exphbs  = require('express-handlebars')

app.set('view options', { layout: false });

app.use(express.static('public'))
app.use('/admin', express.static('public'))


var hbs = exphbs.create({
    helpers: {
        block: function (name) {
            var blocks  = this._blocks,
                content = blocks && blocks[name];

            return content ? content.join('\n') : null;
        },

        contentFor: function (name, options) {
            var blocks = this._blocks || (this._blocks = {}),
                block  = blocks[name] || (blocks[name] = []);

            block.push(options.fn(this));
        }
    }
});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');



app.get('/admin',function(req,res){
  res.render('admin/home', { layout: 'admin.handlebars' });
})


app.get('/admin/calender',function(req,res){
  res.render('admin/calender', { layout: 'admin.handlebars' });
})

app.get('/admin/charts-flot',function(req,res){
  res.render('admin/charts-flot', { layout: 'admin.handlebars' });
})

app.get('/admin/charts-morris',function(req,res){
  res.render('admin/charts-morris', { layout: 'admin.handlebars' });
})

app.get('/admin/forms-components',function(req,res){
  res.render('admin/forms-components', { layout: 'admin.handlebars' });
})

app.get('/admin/forms-layout',function(req,res){
  res.render('admin/forms-layout', { layout: 'admin.handlebars' });
})

app.get('/admin/forms-switchery',function(req,res){
  res.render('admin/forms-switchery', { layout: 'admin.handlebars' });
})

app.get('/admin/forms-validation',function(req,res){
  res.render('admin/forms-validation', { layout: 'admin.handlebars' });
})

app.get('/admin/forms-wizard',function(req,res){
  res.render('admin/forms-wizard', { layout: 'admin.handlebars' });
})

app.get('/admin/mail-compose',function(req,res){
  res.render('admin/mail-compose', { layout: 'admin.handlebars' });
})

app.get('/admin/mail-inbox',function(req,res){
  res.render('admin/mail-inbox', { layout: 'admin.handlebars' });
})

app.get('/admin/mail-mailview',function(req,res){
  res.render('admin/mail-inbox', { layout: 'admin.handlebars' });
})

app.get('/admin/maps-gmap',function(req,res){
  res.render('admin/maps-gmap', { layout: 'admin.handlebars' });
})

app.get('/admin/maps-vectormap',function(req,res){
  res.render('admin/maps-vectormap', { layout: 'admin.handlebars' });
})

app.get('/admin/pages-404',function(req,res){
  res.render('admin/pages-404', { layout: 'default.handlebars' });
})

app.get('/admin/pages-500',function(req,res){
  res.render('admin/pages-500', { layout: 'default.handlebars' });
})

app.get('/admin/pages-directory',function(req,res){
  res.render('admin/pages-directory', { layout: 'admin.handlebars' });
})

app.get('/admin/pages-faq',function(req,res){
  res.render('admin/pages-faq', { layout: 'admin.handlebars' });
})

app.get('/admin/pages-gallery',function(req,res){
  res.render('admin/pages-gallery', { layout: 'admin.handlebars' });
})

app.get('/admin/pages-invoice',function(req,res){
  res.render('admin/pages-invoice', { layout: 'admin.handlebars' });
})

app.get('/admin/pages-pages-lock-screen',function(req,res){
  res.render('admin/pages-pages-lock-screen', { layout: 'default.handlebars' });
})

app.get('/admin/pages-login',function(req,res){
  res.render('admin/pages-login', { layout: 'default.handlebars' });
})

app.get('/admin/pages-password-reminder',function(req,res){
  res.render('admin/pages-password-reminder', { layout: 'default.handlebars' });
})

app.get('/admin/pages-profile',function(req,res){
  res.render('admin/pages-profile', { layout: 'admin.handlebars' });
})

app.get('/admin/pages-register',function(req,res){
  res.render('admin/pages-register', { layout: 'default.handlebars' });
})

app.get('/admin/table-datatable',function(req,res){
  res.render('admin/table-datatable', { layout: 'admin.handlebars' });
})

app.get('/admin/table-footable',function(req,res){
  res.render('admin/table-footable', { layout: 'admin.handlebars' });
})

app.get('/admin/table-static',function(req,res){
  res.render('admin/table-static', { layout: 'admin.handlebars' });
})

app.get('/admin/ui-accordions',function(req,res){
  res.render('admin/ui-accordions', { layout: 'admin.handlebars' });
})

app.get('/admin/ui-animation',function(req,res){
  res.render('admin/ui-animation', { layout: 'admin.handlebars' });
})


app.get('/admin/ui-button',function(req,res){
  res.render('admin/ui-button', { layout: 'admin.handlebars' });
})


app.get('/admin/ui-checkboxes-radio',function(req,res){
  res.render('admin/ui-checkboxes-radio', { layout: 'admin.handlebars' });
})


app.get('/admin/ui-components',function(req,res){
  res.render('admin/ui-components', { layout: 'admin.handlebars' });
})


app.get('/admin/ui-dragdrop',function(req,res){
  res.render('admin/ui-dragdrop', { layout: 'admin.handlebars' });
})


app.get('/admin/ui-fontawesome',function(req,res){
  res.render('admin/ui-fontawesome', { layout: 'admin.handlebars' });
})


app.get('/admin/ui-grids',function(req,res){
  res.render('admin/ui-grids', { layout: 'admin.handlebars' });
})


app.get('/admin/ui-icons',function(req,res){
  res.render('admin/ui-icons', { layout: 'admin.handlebars' });
})


app.get('/admin/ui-model',function(req,res){
  res.render('admin/ui-model', { layout: 'admin.handlebars' });
})


app.get('/admin/ui-nested-lists',function(req,res){
  res.render('admin/ui-nested-lists', { layout: 'admin.handlebars' });
})


app.get('/admin/ui-notification',function(req,res){
  res.render('admin/ui-notification', { layout: 'admin.handlebars' });
})


app.get('/admin/ui-panel',function(req,res){
  res.render('admin/ui-panel', { layout: 'admin.handlebars' });
})


app.get('/admin/ui-tab',function(req,res){
  res.render('admin/ui-tab', { layout: 'admin.handlebars' });
})


app.get('/admin/ui-timeline',function(req,res){
  res.render('admin/ui-timeline', { layout: 'admin.handlebars' });
})


app.get('/admin/ui-typography',function(req,res){
  res.render('admin/ui-typography', { layout: 'admin.handlebars' });
})


app.get('/admin/ui-widgets',function(req,res){
  res.render('admin/ui-widgets', { layout: 'admin.handlebars' });
})


app.get('/admin/ui-xeditable',function(req,res){
  res.render('admin/ui-xeditable', { layout: 'admin.handlebars' });
})







app.listen(port, () => console.log(`Example app listening on port ${port}!`))