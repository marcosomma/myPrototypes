/**
 * Created by iMak on 17/03/15.
 */
var validRegEx = require('./validationRegEx.js');

module.exports = {
    htmlEscape:function() {
        //console.log('htmlEscape');
        var html = this;
        return String(html)
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    },
    htmlUnescape:function() {
        //console.log('htmlUnescape');
        var html = this;
        return String(html)
            .replace(/&amp;/g, '&')
            .replace(/&quot;/g, '"')
            .replace(/&#39;/g, "'")
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>');
    },
    validateContent:function(reg) {
        //console.log('validateContent');
        var string = this;
        var re = new RegExp(validRegEx[reg]);
        return re.test(string);
    }
};