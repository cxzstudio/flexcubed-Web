tinymce.create('tinymce.plugins.dw_page_testimonial', {
        /**
         * Initializes the plugin, this will be executed after the plugin has been created.
         * This call is done before the editor instance has finished it's initialization so use the onInit event
         * of the editor instance to intercept that event.
         *
         * @param {tinymce.Editor} ed Editor instance that the plugin is initialized in.
         * @param {string} url Absolute URL to where the plugin is located.
         */
        init : function(ed, url) {
            // Register the command so that it can be invoked by using tinyMCE.activeEditor.execCommand('mceExample');
            ed.addCommand('testimonialShortcode', function() {
                tinyMCE.execCommand(
                    'mceInsertContent',
                    false,
                    '[onepage_testimonials display="random"]'
                );
            });

            // Register example button
            ed.addButton('dw_page_testimonial', {
                title : 'Insert Testimonial Section',
                cmd : 'testimonialShortcode',
                image : url + '../../../img/posttype-testimonial.png'
            });
        },

        /**
         * Returns information about the plugin as a name/value array.
         * The current keys are longname, author, authorurl, infourl and version.
         *
         * @return {Object} Name/value array containing information about the plugin.
         */
        getInfo : function() {
            return {
                longname : 'DW Page Shortcode Projects',
                author : 'DesignWall',
                authorurl : 'http://designwall.com',
                infourl : 'http://designwall.com',
                version : "1.0"
            };
        }
    });

    tinymce.PluginManager.add('dw_page_testimonial', tinymce.plugins.dw_page_testimonial);