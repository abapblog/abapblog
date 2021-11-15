document.write('<link rel="stylesheet" href="https://github.githubassets.com/assets/gist-embed-8d9004b0a4e5d6825c4b49e3c060b33a.css">')
document.write('<div id=\"gist108285656\" class=\"gist\">\n    <div class=\"gist-file\" translate=\"no\">\n      <div class=\"gist-data\">\n        <div class=\"js-gist-file-update-container js-task-list-container file-box\">\n  <div id=\"file-abap\" class=\"file my-2\">\n    \n  <div itemprop=\"text\" class=\"Box-body p-0 blob-wrapper data type-abap  \">\n\n      \n<div class=\"js-check-bidi blob-code-content\">\n  <div hidden=\"hidden\" data-view-component=\"true\" class=\"js-bidi-alert flash flash-warn flash-full\">\n  <svg aria-hidden=\"true\" height=\"16\" viewBox=\"0 0 16 16\" version=\"1.1\" width=\"16\" data-view-component=\"true\" class=\"octicon octicon-alert\">\n    <path fill-rule=\"evenodd\" d=\"M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z\"><\/path>\n<\/svg>\n  \n  This file contains bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters. <a href=\"https://github.co/hiddenchars\" target=\"_blank\">Learn more about bidirectional Unicode characters<\/a>\n\n\n  \n<\/div><template class=\"js-line-alert-template\">\n  <span aria-label=\"This line has hidden Unicode characters\" data-view-component=\"true\" class=\"bidi-line-alert tooltipped tooltipped-e\">\n    <svg aria-hidden=\"true\" height=\"16\" viewBox=\"0 0 16 16\" version=\"1.1\" width=\"16\" data-view-component=\"true\" class=\"octicon octicon-alert\">\n    <path fill-rule=\"evenodd\" d=\"M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z\"><\/path>\n<\/svg>\n<\/span><\/template>\n\n  <table class=\"highlight tab-size js-file-line-container\" data-tab-size=\"8\" data-paste-markdown-skip>\n        <tr>\n          <td id=\"file-abap-L1\" class=\"blob-num js-line-number\" data-line-number=\"1\"><\/td>\n          <td id=\"file-abap-LC1\" class=\"blob-code blob-code-inner js-file-line\">  <span class=\"pl-k\">CALL<\/span> <span class=\"pl-k\">METHOD<\/span> cl_gui_frontend_services=&gt;file_open_dialog<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-abap-L2\" class=\"blob-num js-line-number\" data-line-number=\"2\"><\/td>\n          <td id=\"file-abap-LC2\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-k\">EXPORTING<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-abap-L3\" class=\"blob-num js-line-number\" data-line-number=\"3\"><\/td>\n          <td id=\"file-abap-LC3\" class=\"blob-code blob-code-inner js-file-line\">      window_title      <span class=\"pl-k\">=<\/span> <span class=\"pl-s\">&#39;File&#39;<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-abap-L4\" class=\"blob-num js-line-number\" data-line-number=\"4\"><\/td>\n          <td id=\"file-abap-LC4\" class=\"blob-code blob-code-inner js-file-line\">      default_extension <span class=\"pl-k\">=<\/span> <span class=\"pl-s\">&#39;*.txt&#39;<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-abap-L5\" class=\"blob-num js-line-number\" data-line-number=\"5\"><\/td>\n          <td id=\"file-abap-LC5\" class=\"blob-code blob-code-inner js-file-line\">      file_filter       <span class=\"pl-k\">=<\/span> <span class=\"pl-s\">&#39;Text file (*.txt)|*.txt|File with delimiter &quot;;&quot; (*.csv)|*.csv|Excel (*.xls)|*.xls|All (*.*)|*.*&#39;<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-abap-L6\" class=\"blob-num js-line-number\" data-line-number=\"6\"><\/td>\n          <td id=\"file-abap-LC6\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-k\">CHANGING<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-abap-L7\" class=\"blob-num js-line-number\" data-line-number=\"7\"><\/td>\n          <td id=\"file-abap-LC7\" class=\"blob-code blob-code-inner js-file-line\">      file_table        <span class=\"pl-k\">=<\/span> _it_file_table      <span class=\"pl-c\">&quot;initial_directory = &#39;C:&#39;<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-abap-L8\" class=\"blob-num js-line-number\" data-line-number=\"8\"><\/td>\n          <td id=\"file-abap-LC8\" class=\"blob-code blob-code-inner js-file-line\">      rc                <span class=\"pl-k\">=<\/span> _rc.<\/td>\n        <\/tr>\n  <\/table>\n<\/div>\n\n\n  <\/div>\n\n  <\/div>\n<\/div>\n\n      <\/div>\n      <div class=\"gist-meta\">\n        <a href=\"https://gist.github.com/MikeSidorochkin/aedac6db52d96c887e001c69856bc721/raw/67c96b78bffde43fb292c57c0a3514ebdee46bb8/.abap\" style=\"float:right\">view raw<\/a>\n        <a href=\"https://gist.github.com/MikeSidorochkin/aedac6db52d96c887e001c69856bc721#file-abap\">\n          .abap\n        <\/a>\n        hosted with &#10084; by <a href=\"https://github.com\">GitHub<\/a>\n      <\/div>\n    <\/div>\n<\/div>\n')
