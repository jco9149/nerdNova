/*!
 * Quasar Framework v2.15.2
 * (c) 2015-present Razvan Stoenescu
 * Released under the MIT License.
 */

(()=>{window.Quasar.Lang.ja={isoName:"ja",nativeName:"\u65E5\u672C\u8A9E (\u306B\u307B\u3093\u3054)",label:{clear:"\u30AF\u30EA\u30A2",ok:"OK",cancel:"\u30AD\u30E3\u30F3\u30BB\u30EB",close:"\u9589\u3058\u308B",set:"\u8A2D\u5B9A",select:"\u9078\u629E",reset:"\u30EA\u30BB\u30C3\u30C8",remove:"\u524A\u9664",update:"\u66F4\u65B0",create:"\u4F5C\u6210",search:"\u691C\u7D22",filter:"\u30D5\u30A3\u30EB\u30BF",refresh:"\u518D\u8AAD\u8FBC",expand:e=>e?`\u300C${e}\u300D\u3092\u5C55\u958B\u3057\u307E\u3059\u3002`:"\u62E1\u5927",collapse:e=>e?`\u300C${e}\u300D\u3092\u6298\u308A\u305F\u305F\u3080`:"\u5D29\u58CA"},date:{days:"\u65E5\u66DC\u65E5_\u6708\u66DC\u65E5_\u706B\u66DC\u65E5_\u6C34\u66DC\u65E5_\u6728\u66DC\u65E5_\u91D1\u66DC\u65E5_\u571F\u66DC\u65E5".split("_"),daysShort:"\u65E5_\u6708_\u706B_\u6C34_\u6728_\u91D1_\u571F".split("_"),months:"1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),monthsShort:"1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),headerTitle:e=>new Intl.DateTimeFormat("ja-JP",{weekday:"short",month:"short",day:"numeric"}).format(e),firstDayOfWeek:0,format24h:!0,pluralDay:"\u65E5\u9593"},table:{noData:"\u30C7\u30FC\u30BF\u304C\u3042\u308A\u307E\u305B\u3093",noResults:"\u691C\u7D22\u7D50\u679C\u304C\u3042\u308A\u307E\u305B\u3093",loading:"\u8AAD\u8FBC\u4E2D...",selectedRecords:e=>e>0?e+"\u884C\u3092\u9078\u629E\u4E2D":"\u884C\u3092\u9078\u629E",recordsPerPage:"\u30DA\u30FC\u30B8\u3042\u305F\u308A\u306E\u884C\u6570",allRows:"\u5168\u3066",pagination:(e,t,a)=>e+"-"+t+" \uFF0F "+a,columns:"\u5217"},editor:{url:"URL",bold:"\u592A\u5B57",italic:"\u659C\u4F53",strikethrough:"\u53D6\u308A\u6D88\u3057\u7DDA",underline:"\u4E0B\u7DDA",unorderedList:"\u7B87\u6761\u66F8\u304D",orderedList:"\u6BB5\u843D\u756A\u53F7",subscript:"\u4E0B\u4ED8\u304D",superscript:"\u4E0A\u4ED8\u304D",hyperlink:"\u30EA\u30F3\u30AF",toggleFullscreen:"\u5168\u753B\u9762\u8868\u793A",quote:"\u5F15\u7528\u6587",left:"\u5DE6\u63C3\u3048",center:"\u4E2D\u592E\u63C3\u3048",right:"\u53F3\u63C3\u3048",justify:"\u4E21\u7AEF\u63C3\u3048",print:"\u5370\u5237",outdent:"\u30A4\u30F3\u30C7\u30F3\u30C8\u89E3\u9664",indent:"\u30A4\u30F3\u30C7\u30F3\u30C8",removeFormat:"\u66F8\u5F0F\u89E3\u9664",formatting:"\u66F8\u5F0F",fontSize:"\u30D5\u30A9\u30F3\u30C8\u30B5\u30A4\u30BA",align:"\u63C3\u3048",hr:"\u6A2A\u7DDA\u3092\u6295\u5165",undo:"\u5143\u306B\u623B\u3059",redo:"\u3084\u308A\u76F4\u3057",heading1:"\u30D8\u30C3\u30C0\u30FC 1",heading2:"\u30D8\u30C3\u30C0\u30FC 2",heading3:"\u30D8\u30C3\u30C0\u30FC 3",heading4:"\u30D8\u30C3\u30C0\u30FC 4",heading5:"\u30D8\u30C3\u30C0\u30FC 5",heading6:"\u30D8\u30C3\u30C0\u30FC 6",paragraph:"\u6BB5\u843D",code:"\u30B3\u30FC\u30C9",size1:"\u5C0F\u3055\u3044",size2:"\u3084\u3084\u5C0F\u3055\u3044",size3:"\u666E\u901A",size4:"\u3084\u3084\u5927\u304D\u3044",size5:"\u5927\u304D\u3044",size6:"\u3068\u3066\u3082\u5927\u304D\u3044",size7:"\u6700\u5927",defaultFont:"\u521D\u671F\u30D5\u30A9\u30F3\u30C8",viewSource:"\u30BD\u30FC\u30B9\u3092\u898B\u308B"},tree:{noNodes:"\u30CE\u30FC\u30C9\u304C\u3042\u308A\u307E\u305B\u3093",noResults:"\u8A72\u5F53\u3059\u308B\u30CE\u30FC\u30C9\u304C\u3042\u308A\u307E\u305B\u3093"}};})();
