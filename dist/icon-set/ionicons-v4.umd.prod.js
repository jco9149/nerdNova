/*!
 * Quasar Framework v2.15.2
 * (c) 2015-present Razvan Stoenescu
 * Released under the MIT License.
 */

(()=>{var V="M13.5,15.5H10V12.5H13.5A1.5,1.5 0 0,1 15,14A1.5,1.5 0 0,1 13.5,15.5M10,6.5H13A1.5,1.5 0 0,1 14.5,8A1.5,1.5 0 0,1 13,9.5H10M15.6,10.79C16.57,10.11 17.25,9 17.25,8C17.25,5.74 15.5,4 13.25,4H7V18H14.04C16.14,18 17.75,16.3 17.75,14.21C17.75,12.69 16.89,11.39 15.6,10.79Z",i="M10,4V7H12.21L8.79,15H6V18H14V15H11.79L15.21,7H18V4H10Z",r="M23,12V14H18.61C19.61,16.14 19.56,22 12.38,22C4.05,22.05 4.37,15.5 4.37,15.5L8.34,15.55C8.37,18.92 11.5,18.92 12.12,18.88C12.76,18.83 15.15,18.84 15.34,16.5C15.42,15.41 14.32,14.58 13.12,14H1V12H23M19.41,7.89L15.43,7.86C15.43,7.86 15.6,5.09 12.15,5.08C8.7,5.06 9,7.28 9,7.56C9.04,7.84 9.34,9.22 12,9.88H5.71C5.71,9.88 2.22,3.15 10.74,2C19.45,0.8 19.43,7.91 19.41,7.89Z",n="M5,21H19V19H5V21M12,17A6,6 0 0,0 18,11V3H15.5V11A3.5,3.5 0 0,1 12,14.5A3.5,3.5 0 0,1 8.5,11V3H6V11A6,6 0 0,0 12,17Z",e="M7,5H21V7H7V5M7,13V11H21V13H7M4,4.5A1.5,1.5 0 0,1 5.5,6A1.5,1.5 0 0,1 4,7.5A1.5,1.5 0 0,1 2.5,6A1.5,1.5 0 0,1 4,4.5M4,10.5A1.5,1.5 0 0,1 5.5,12A1.5,1.5 0 0,1 4,13.5A1.5,1.5 0 0,1 2.5,12A1.5,1.5 0 0,1 4,10.5M7,19V17H21V19H7M4,16.5A1.5,1.5 0 0,1 5.5,18A1.5,1.5 0 0,1 4,19.5A1.5,1.5 0 0,1 2.5,18A1.5,1.5 0 0,1 4,16.5Z",t="M7,13V11H21V13H7M7,19V17H21V19H7M7,7V5H21V7H7M3,8V5H2V4H4V8H3M2,17V16H5V20H2V19H4V18.5H3V17.5H4V17H2M4.25,10A0.75,0.75 0 0,1 5,10.75C5,10.95 4.92,11.14 4.79,11.27L3.12,13H5V14H2V13.08L4,11H2V10H4.25Z",a="M16,7.41L11.41,12L16,16.59L14.59,18L10,13.41L5.41,18L4,16.59L8.59,12L4,7.41L5.41,6L10,10.59L14.59,6L16,7.41M21.85,21.03H16.97V20.03L17.86,19.23C18.62,18.58 19.18,18.04 19.56,17.6C19.93,17.16 20.12,16.75 20.13,16.36C20.14,16.08 20.05,15.85 19.86,15.66C19.68,15.5 19.39,15.38 19,15.38C18.69,15.38 18.42,15.44 18.16,15.56L17.5,15.94L17.05,14.77C17.32,14.56 17.64,14.38 18.03,14.24C18.42,14.1 18.85,14 19.32,14C20.1,14.04 20.7,14.25 21.1,14.66C21.5,15.07 21.72,15.59 21.72,16.23C21.71,16.79 21.53,17.31 21.18,17.78C20.84,18.25 20.42,18.7 19.91,19.14L19.27,19.66V19.68H21.85V21.03Z",d="M16,7.41L11.41,12L16,16.59L14.59,18L10,13.41L5.41,18L4,16.59L8.59,12L4,7.41L5.41,6L10,10.59L14.59,6L16,7.41M21.85,9H16.97V8L17.86,7.18C18.62,6.54 19.18,6 19.56,5.55C19.93,5.11 20.12,4.7 20.13,4.32C20.14,4.04 20.05,3.8 19.86,3.62C19.68,3.43 19.39,3.34 19,3.33C18.69,3.34 18.42,3.4 18.16,3.5L17.5,3.89L17.05,2.72C17.32,2.5 17.64,2.33 18.03,2.19C18.42,2.05 18.85,2 19.32,2C20.1,2 20.7,2.2 21.1,2.61C21.5,3 21.72,3.54 21.72,4.18C21.71,4.74 21.53,5.26 21.18,5.73C20.84,6.21 20.42,6.66 19.91,7.09L19.27,7.61V7.63H21.85V9Z",H="M3,3H21V5H3V3M3,7H15V9H3V7M3,11H21V13H3V11M3,15H15V17H3V15M3,19H21V21H3V19Z",c="M3,3H21V5H3V3M7,7H17V9H7V7M3,11H21V13H3V11M7,15H17V17H7V15M3,19H21V21H3V19Z",s="M3,3H21V5H3V3M9,7H21V9H9V7M3,11H21V13H3V11M9,15H21V17H9V15M3,19H21V21H3V19Z",M="M3,3H21V5H3V3M3,7H21V9H3V7M3,11H21V13H3V11M3,15H21V17H3V15M3,19H21V21H3V19Z",m="M11,13H21V11H11M11,9H21V7H11M3,3V5H21V3M3,21H21V19H3M3,12L7,16V8M11,17H21V15H11V17Z",A="M11,13H21V11H11M11,9H21V7H11M3,3V5H21V3M11,17H21V15H11M3,8V16L7,12M3,21H21V19H3V21Z",L="M6,5V5.18L8.82,8H11.22L10.5,9.68L12.6,11.78L14.21,8H20V5H6M3.27,5L2,6.27L8.97,13.24L6.5,19H9.5L11.07,15.34L16.73,21L18,19.73L3.55,5.27L3.27,5Z",l="M9.62,12L12,5.67L14.37,12M11,3L5.5,17H7.75L8.87,14H15.12L16.25,17H18.5L13,3H11Z",o="M2 4V7H7V19H10V7H15V4H2M21 9H12V12H15V19H18V12H21V9Z",w="M19,13H5V11H19V13Z",C="M3,4H5V10H9V4H11V18H9V12H5V18H3V4M14,18V16H16V6.31L13.5,7.75V5.44L16,4H18V16H20V18H14Z",u="M3,4H5V10H9V4H11V18H9V12H5V18H3V4M21,18H15A2,2 0 0,1 13,16C13,15.47 13.2,15 13.54,14.64L18.41,9.41C18.78,9.05 19,8.55 19,8A2,2 0 0,0 17,6A2,2 0 0,0 15,8H13A4,4 0 0,1 17,4A4,4 0 0,1 21,8C21,9.1 20.55,10.1 19.83,10.83L15,16H21V18Z",p="M3,4H5V10H9V4H11V18H9V12H5V18H3V4M15,4H19A2,2 0 0,1 21,6V16A2,2 0 0,1 19,18H15A2,2 0 0,1 13,16V15H15V16H19V12H15V10H19V6H15V7H13V6A2,2 0 0,1 15,4Z",g="M3,4H5V10H9V4H11V18H9V12H5V18H3V4M18,18V13H13V11L18,4H20V11H21V13H20V18H18M18,11V7.42L15.45,11H18Z",Z="M3,4H5V10H9V4H11V18H9V12H5V18H3V4M15,4H20V6H15V10H17A4,4 0 0,1 21,14A4,4 0 0,1 17,18H15A2,2 0 0,1 13,16V15H15V16H17A2,2 0 0,0 19,14A2,2 0 0,0 17,12H15A2,2 0 0,1 13,10V6A2,2 0 0,1 15,4Z",h="M3,4H5V10H9V4H11V18H9V12H5V18H3V4M15,4H19A2,2 0 0,1 21,6V7H19V6H15V10H19A2,2 0 0,1 21,12V16A2,2 0 0,1 19,18H15A2,2 0 0,1 13,16V6A2,2 0 0,1 15,4M15,12V16H19V12H15Z",f="M14,17H12V9H10V7H14M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z",F="M15,11C15,12.11 14.1,13 13,13H11V15H15V17H9V13C9,11.89 9.9,11 11,11H13V9H9V7H13A2,2 0 0,1 15,9M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z",k="M15,10.5A1.5,1.5 0 0,1 13.5,12C14.34,12 15,12.67 15,13.5V15C15,16.11 14.11,17 13,17H9V15H13V13H11V11H13V9H9V7H13C14.11,7 15,7.89 15,9M19,3H5C3.91,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19C20.11,21 21,20.1 21,19V5A2,2 0 0,0 19,3Z",b="M15,17H13V13H9V7H11V11H13V7H15M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z",v="M15,9H11V11H13A2,2 0 0,1 15,13V15C15,16.11 14.1,17 13,17H9V15H13V13H9V7H15M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z",x="M15,9H11V11H13A2,2 0 0,1 15,13V15C15,16.11 14.1,17 13,17H11A2,2 0 0,1 9,15V9C9,7.89 9.9,7 11,7H15M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M11,15H13V13H11V15Z",z="M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M11,17L15,9V7H9V9H13L9,17H11Z",B="M17,8H20V20H21V21H17V20H18V17H14L12.5,20H14V21H10V20H11L17,8M18,9L14.5,16H18V9M5,3H10C11.11,3 12,3.89 12,5V16H9V11H6V16H3V5C3,3.89 3.89,3 5,3M6,5V9H9V5H6Z";window.Quasar.IconSet.ioniconsV4={name:"ionicons-v4",type:{positive:"ion-md-checkmark",negative:"ion-alert",info:"ion-information-circle-outline",warning:"ion-alert"},arrow:{up:"ion-arrow-up",right:"ion-arrow-forward",down:"ion-arrow-down",left:"ion-arrow-back",dropdown:"ion-arrow-dropdown"},chevron:{left:"ion-ios-arrow-back",right:"ion-ios-arrow-forward"},colorPicker:{spectrum:"ion-aperture",tune:"ion-options",palette:"ion-apps"},pullToRefresh:{icon:"ion-refresh"},carousel:{left:"ion-ios-arrow-back",right:"ion-ios-arrow-forward",up:"ion-ios-arrow-up",down:"ion-ios-arrow-down",navigationIcon:"ion-square"},chip:{remove:"ion-close-circle",selected:"ion-checkmark"},datetime:{arrowLeft:"ion-ios-arrow-back",arrowRight:"ion-ios-arrow-forward",now:"ion-time",today:"ion-calendar"},editor:{hyperlink:"ion-link",toggleFullscreen:"ion-expand",quote:"ion-quote",print:"ion-print",undo:"ion-undo",redo:"ion-redo",code:"ion-code",viewSource:"ion-ios-code",bold:V,italic:i,strikethrough:r,underline:n,unorderedList:e,orderedList:t,subscript:a,superscript:d,left:H,center:c,right:s,justify:M,outdent:m,indent:A,removeFormat:L,formatting:l,fontSize:o,align:H,hr:w,heading:o,heading1:C,heading2:u,heading3:p,heading4:g,heading5:Z,heading6:h,size:o,size1:f,size2:F,size3:k,size4:b,size5:v,size6:x,size7:z,font:B},expansionItem:{icon:"ion-arrow-dropdown",denseIcon:"ion-arrow-dropdown"},fab:{icon:"ion-add",activeIcon:"ion-close"},field:{clear:"ion-close-circle",error:"ion-alert"},pagination:{first:"ion-ios-skip-backward",prev:"ion-ios-arrow-back",next:"ion-ios-arrow-forward",last:"ion-ios-skip-forward"},rating:{icon:"ion-star"},stepper:{done:"ion-checkmark",active:"ion-create",error:"ion-warning"},tabs:{left:"ion-ios-arrow-back",right:"ion-ios-arrow-forward",up:"ion-ios-arrow-up",down:"ion-ios-arrow-down"},table:{arrowUp:"ion-arrow-up",warning:"ion-warning",firstPage:"ion-ios-return-left",prevPage:"ion-ios-arrow-back",nextPage:"ion-ios-arrow-forward",lastPage:"ion-ios-return-right"},tree:{icon:"ion-play"},uploader:{done:"ion-checkmark",clear:"ion-close",add:"ion-add-circle",upload:"ion-cloud-upload",removeQueue:"ion-trash",removeUploaded:"ion-done-all"}};})();
