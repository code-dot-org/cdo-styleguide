"use strict";(self.webpackChunkblockly_mooc=self.webpackChunkblockly_mooc||[]).push([[9],{"./generated-scripts/sharedConstants.ts":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.UsStates=exports.UserTypes=exports.LmsLinks=exports.CapLinks=exports.FeaturedProjectConstants=exports.FeaturedProjectStatus=exports.AiChatModelIds=exports.AiRequestExecutionStatus=exports.AiTutorTypes=exports.AiTutorInteractionStatus=exports.AiInteractionStatus=exports.DanceSongManifestFilename=exports.CensusConstants=exports.ChildAccountComplianceStates=exports.EmailLinks=exports.RubricAiEvaluationLimits=exports.RubricAiEvaluationStatus=exports.RubricUnderstandingLevels=exports.RestrictedPublishProjectTypes=exports.ErrorSeverityLevels=exports.AbuseConstants=exports.ConditionallyPublishableProjectTypes=exports.AllPublishableProjectTypes=exports.AlwaysPublishableProjectTypes=exports.PostMilestoneMode=exports.PlGradeValue=exports.StudentGradeLevels=exports.SectionLoginType=exports.LevelStatus=exports.LevelKind=exports.ArtistAutorunOptions=exports.DefaultLocale=void 0,exports.DefaultLocale="en-US",exports.ArtistAutorunOptions={full_auto_run:"FULL_AUTO_RUN"},exports.LevelKind={peer_review:"peer_review",assessment:"assessment",puzzle:"puzzle",unplugged:"unplugged",level:"level",stage_extras:"stage_extras"},exports.LevelStatus={not_tried:"not_tried",submitted:"submitted",perfect:"perfect",passed:"passed",attempted:"attempted",review_accepted:"review_accepted",review_rejected:"review_rejected",dots_disabled:"dots_disabled",free_play_complete:"free_play_complete",completed_assessment:"completed_assessment"},exports.SectionLoginType={word:"word",picture:"picture",email:"email",google_classroom:"google_classroom",clever:"clever",lti_v1:"lti_v1"},exports.StudentGradeLevels=["K","1","2","3","4","5","6","7","8","9","10","11","12","Other"],exports.PlGradeValue="pl",exports.PostMilestoneMode={all:"all",successful_runs_and_final_level_only:"successful_runs_and_final_level_only",final_level_only:"final_level_only"},exports.AlwaysPublishableProjectTypes=["artist","frozen","playlab","gumball","iceage","infinity","minecraft_adventurer","minecraft_designer","minecraft_hero","minecraft_aquatic","starwars","starwarsblocks","starwarsblocks_hour","flappy","bounce","sports","basketball","artist_k1","playlab_k1","dance","poetry","poetry_hoc","thebadguys","music"],exports.AllPublishableProjectTypes=["artist","frozen","playlab","gumball","iceage","infinity","minecraft_adventurer","minecraft_designer","minecraft_hero","minecraft_aquatic","starwars","starwarsblocks","starwarsblocks_hour","flappy","bounce","sports","basketball","artist_k1","playlab_k1","dance","poetry","poetry_hoc","thebadguys","music","applab","gamelab","spritelab"],exports.ConditionallyPublishableProjectTypes=["applab","gamelab"],exports.AbuseConstants={ABUSE_THRESHOLD:15},exports.ErrorSeverityLevels={WARN:2,ERROR:3,FATAL:4},exports.RestrictedPublishProjectTypes=["spritelab"],exports.RubricUnderstandingLevels={EXTENSIVE:3,CONVINCING:2,LIMITED:1,NONE:0},exports.RubricAiEvaluationStatus={QUEUED:0,RUNNING:1,SUCCESS:2,FAILURE:1e3,PII_VIOLATION:1001,PROFANITY_VIOLATION:1002,REQUEST_TOO_LARGE:1003,STUDENT_LIMIT_EXCEEDED:1004,TEACHER_LIMIT_EXCEEDED:1005},exports.RubricAiEvaluationLimits={STUDENT_LIMIT:10,TEACHER_LIMIT:10},exports.EmailLinks={PRIVACY_POLICY_URL:"https://code.org/privacy",CONTACT_US_URL:"https://code.org/contact",TOS_URL:"https://code.org/tos",STUDENT_PRIVACY_PLEDGE_URL:"https://studentprivacypledge.org/signatories/",COMMON_SENSE_MEDIA_URL:"https://privacy.commonsense.org/evaluation/code.org",CDO_SUPPORT_MAILTO:"mailto:support@code.org"},exports.ChildAccountComplianceStates={GRACE_PERIOD:"p",LOCKED_OUT:"l",PERMISSION_GRANTED:"g"},exports.CensusConstants={CURRENT_CENSUS_SCHOOL_YEAR:2023},exports.DanceSongManifestFilename="songManifest2024_v2.json",exports.AiInteractionStatus={ERROR:"error",PII_VIOLATION:"pii_violation",PROFANITY_VIOLATION:"profanity_violation",USER_INPUT_TOO_LARGE:"user_input_too_large",OK:"ok",UNKNOWN:"unknown"},exports.AiTutorInteractionStatus={ERROR:"error",PII_VIOLATION:"pii_violation",PROFANITY_VIOLATION:"profanity_violation",USER_INPUT_TOO_LARGE:"user_input_too_large",OK:"ok",UNKNOWN:"unknown"},exports.AiTutorTypes={COMPILATION:"compilation",VALIDATION:"validation",GENERAL_CHAT:"general_chat"},exports.AiRequestExecutionStatus={NOT_STARTED:0,QUEUED:1,RUNNING:2,SUCCESS:3,FAILURE:1e3,USER_PROFANITY:1001,USER_PII:1002,MODEL_PROFANITY:1003,MODEL_PII:1004,USER_INPUT_TOO_LARGE:1005},exports.AiChatModelIds={ARITHMO:"gen-ai-arithmo2-mistral-7b",BIOMISTRAL:"gen-ai-biomistral-7b",MISTRAL:"gen-ai-mistral-7b-inst-v01",KAREN:"gen-ai-karen-creative-mistral-7b",PIRATE:"gen-ai-mistral-pirate-7b"},exports.FeaturedProjectStatus={active:"active",bookmarked:"bookmarked",archived:"archived"},exports.FeaturedProjectConstants={MAX_REQUESTS_PER_CATEGORY:15},exports.CapLinks={PARENTAL_CONSENT_GUIDE_URL:"https://support.code.org/hc/en-us/articles/15465423491085-How-do-I-obtain-parent-or-guardian-permission-for-student-accounts"},exports.LmsLinks={INTEGRATION_GUIDE_URL:"https://support.code.org/hc/en-us/articles/23120014459405-Learning-Management-System-LMS-and-Single-Sign-On-SSO-Integrations-and-Support-for-Code-org",INSTALL_INSTRUCTIONS_URL:"https://support.code.org/hc/en-us/articles/23621907533965-Install-Code-org-Integrations-for-your-Learning-Management-System",ROSTER_SYNC_INSTRUCTIONS_URL:"https://support.code.org/hc/en-us/articles/23621978654605-Sync-Rosters-with-your-Learning-Management-System",ADDITIONAL_FEEDBACK_URL:"https://studio.code.org/form/lms_integration_modal_feedback",SUPPORTED_METHODS_URL:"https://github.com/code-dot-org/code-dot-org/blob/staging/docs/lti-integration.md#option-2-manual-entry"},exports.UserTypes={STUDENT:"student",TEACHER:"teacher"},exports.UsStates={AL:"Alabama",AK:"Alaska",AZ:"Arizona",AR:"Arkansas",CA:"California",CO:"Colorado",CT:"Connecticut",DE:"Delaware",FL:"Florida",GA:"Georgia",HI:"Hawaii",ID:"Idaho",IL:"Illinois",IN:"Indiana",IA:"Iowa",KS:"Kansas",KY:"Kentucky",LA:"Louisiana",ME:"Maine",MD:"Maryland",MA:"Massachusetts",MI:"Michigan",MN:"Minnesota",MS:"Mississippi",MO:"Missouri",MT:"Montana",NE:"Nebraska",NV:"Nevada",NH:"New Hampshire",NJ:"New Jersey",NM:"New Mexico",NY:"New York",NC:"North Carolina",ND:"North Dakota",OH:"Ohio",OK:"Oklahoma",OR:"Oregon",PA:"Pennsylvania",RI:"Rhode Island",SC:"South Carolina",SD:"South Dakota",TN:"Tennessee",TX:"Texas",UT:"Utah",VT:"Vermont",VA:"Virginia",WA:"Washington",DC:"Washington, D.C.",WV:"West Virginia",WI:"Wisconsin",WY:"Wyoming"}},"./src/simpleSignUp/lti/sync/LtiSectionSyncDialog.story.tsx":function(__unused_webpack_module,exports,__webpack_require__){var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.Error=exports.SuccessfulSync=void 0;var react_1=__importDefault(__webpack_require__("./node_modules/react/index.js")),LtiSectionSyncDialog_1=__importDefault(__webpack_require__("./src/simpleSignUp/lti/sync/LtiSectionSyncDialog.tsx"));exports.default={component:LtiSectionSyncDialog_1.default};var Template=function(args){return react_1.default.createElement(LtiSectionSyncDialog_1.default,__assign({},args))};exports.SuccessfulSync=Template.bind({}),exports.SuccessfulSync.args={isOpen:!0,disableRosterSyncButtonEnabled:!0,syncResult:{all:{1:{name:"CSD - Period 1",short_name:"Period 1",size:34,lti_section_id:1,instructors:[{name:"Teacher 1",id:0,isOwner:!0}]},2:{name:"CSD - Period 2",short_name:"Period 2",size:27,lti_section_id:2,instructors:[{name:"Teacher 1",id:0,isOwner:!0}]},3:{name:"CSD - Period 3",short_name:"Period 3",size:32,lti_section_id:3,instructors:[{name:"Teacher 1",id:0,isOwner:!0}]}},changed:{2:{name:"CSD - Period 2",short_name:"Period 2",size:27,lti_section_id:2,instructors:[{name:"Teacher 1",id:0,isOwner:!0}]},3:{name:"CSD - Period 3",short_name:"Period 3",size:32,lti_section_id:3,instructors:[{name:"Teacher 1",id:0,isOwner:!0}]}}}},exports.Error=Template.bind({}),exports.Error.args={isOpen:!0,syncResult:{error:"no_integration"}}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlU2lnblVwLWx0aS1zeW5jLUx0aVNlY3Rpb25TeW5jRGlhbG9nLXN0b3J5LjY2YzdlMjViLmlmcmFtZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Im9sQ0FNYSxRQUFBQSxjQUFnQixRQUVoQixRQUFBQyxxQkFBdUIsQ0FDbEMsY0FBaUIsaUJBR04sUUFBQUMsVUFBWSxDQUN2QixZQUFlLGNBQ2YsV0FBYyxhQUNkLE9BQVUsU0FDVixVQUFhLFlBQ2IsTUFBUyxRQUNULGFBQWdCLGdCQUdMLFFBQUFDLFlBQWMsQ0FDekIsVUFBYSxZQUNiLFVBQWEsWUFDYixRQUFXLFVBQ1gsT0FBVSxTQUNWLFVBQWEsWUFDYixnQkFBbUIsa0JBQ25CLGdCQUFtQixrQkFDbkIsY0FBaUIsZ0JBQ2pCLG1CQUFzQixxQkFDdEIscUJBQXdCLHdCQUdiLFFBQUFDLGlCQUFtQixDQUM5QixLQUFRLE9BQ1IsUUFBVyxVQUNYLE1BQVMsUUFDVCxpQkFBb0IsbUJBQ3BCLE9BQVUsU0FDVixPQUFVLFVBR0MsUUFBQUMsbUJBQXFCLENBQ2hDLElBQ0EsSUFDQSxJQUNBLElBQ0EsSUFDQSxJQUNBLElBQ0EsSUFDQSxJQUNBLElBQ0EsS0FDQSxLQUNBLEtBQ0EsU0FHVyxRQUFBQyxhQUFlLEtBRWYsUUFBQUMsa0JBQW9CLENBQy9CLElBQU8sTUFDUCxxQ0FBd0MsdUNBQ3hDLGlCQUFvQixvQkFHVCxRQUFBQyw4QkFBZ0MsQ0FDM0MsU0FDQSxTQUNBLFVBQ0EsVUFDQSxTQUNBLFdBQ0EsdUJBQ0EscUJBQ0EsaUJBQ0Esb0JBQ0EsV0FDQSxpQkFDQSxzQkFDQSxTQUNBLFNBQ0EsU0FDQSxhQUNBLFlBQ0EsYUFDQSxRQUNBLFNBQ0EsYUFDQSxhQUNBLFNBR1csUUFBQUMsMkJBQTZCLENBQ3hDLFNBQ0EsU0FDQSxVQUNBLFVBQ0EsU0FDQSxXQUNBLHVCQUNBLHFCQUNBLGlCQUNBLG9CQUNBLFdBQ0EsaUJBQ0Esc0JBQ0EsU0FDQSxTQUNBLFNBQ0EsYUFDQSxZQUNBLGFBQ0EsUUFDQSxTQUNBLGFBQ0EsYUFDQSxRQUNBLFNBQ0EsVUFDQSxhQUdXLFFBQUFDLHFDQUF1QyxDQUNsRCxTQUNBLFdBR1csUUFBQUMsZUFBaUIsQ0FDNUIsZ0JBQW1CLElBR1IsUUFBQUMsb0JBQXNCLENBQ2pDLEtBQVEsRUFDUixNQUFTLEVBQ1QsTUFBUyxHQUdFLFFBQUFDLDhCQUFnQyxDQUMzQyxhQUdXLFFBQUFDLDBCQUE0QixDQUN2QyxVQUFhLEVBQ2IsV0FBYyxFQUNkLFFBQVcsRUFDWCxLQUFRLEdBR0csUUFBQUMseUJBQTJCLENBQ3RDLE9BQVUsRUFDVixRQUFXLEVBQ1gsUUFBVyxFQUNYLFFBQVcsSUFDWCxjQUFpQixLQUNqQixvQkFBdUIsS0FDdkIsa0JBQXFCLEtBQ3JCLHVCQUEwQixLQUMxQix1QkFBMEIsTUFHZixRQUFBQyx5QkFBMkIsQ0FDdEMsY0FBaUIsR0FDakIsY0FBaUIsSUFHTixRQUFBQyxXQUFhLENBQ3hCLG1CQUFzQiwyQkFDdEIsZUFBa0IsMkJBQ2xCLFFBQVcsdUJBQ1gsMkJBQThCLGdEQUM5Qix1QkFBMEIsc0RBQzFCLG1CQUFzQiwyQkFHWCxRQUFBQyw2QkFBK0IsQ0FDMUMsYUFBZ0IsSUFDaEIsV0FBYyxJQUNkLG1CQUFzQixLQUdYLFFBQUFDLGdCQUFrQixDQUM3QiwyQkFBOEIsTUFHbkIsUUFBQUMsMEJBQTRCLDJCQUU1QixRQUFBQyxvQkFBc0IsQ0FDakMsTUFBUyxRQUNULGNBQWlCLGdCQUNqQixvQkFBdUIsc0JBQ3ZCLHFCQUF3Qix1QkFDeEIsR0FBTSxLQUNOLFFBQVcsV0FHQSxRQUFBQyx5QkFBMkIsQ0FDdEMsTUFBUyxRQUNULGNBQWlCLGdCQUNqQixvQkFBdUIsc0JBQ3ZCLHFCQUF3Qix1QkFDeEIsR0FBTSxLQUNOLFFBQVcsV0FHQSxRQUFBQyxhQUFlLENBQzFCLFlBQWUsY0FDZixXQUFjLGFBQ2QsYUFBZ0IsZ0JBR0wsUUFBQUMseUJBQTJCLENBQ3RDLFlBQWUsRUFDZixPQUFVLEVBQ1YsUUFBVyxFQUNYLFFBQVcsRUFDWCxRQUFXLElBQ1gsZUFBa0IsS0FDbEIsU0FBWSxLQUNaLGdCQUFtQixLQUNuQixVQUFhLEtBQ2IscUJBQXdCLE1BR2IsUUFBQUMsZUFBaUIsQ0FDNUIsUUFBVyw2QkFDWCxXQUFjLHVCQUNkLFFBQVcsNkJBQ1gsTUFBUyxtQ0FDVCxPQUFVLDRCQUdDLFFBQUFDLHNCQUF3QixDQUNuQyxPQUFVLFNBQ1YsV0FBYyxhQUNkLFNBQVksWUFHRCxRQUFBQyx5QkFBMkIsQ0FDdEMsMEJBQTZCLElBR2xCLFFBQUFDLFNBQVcsQ0FDdEIsMkJBQThCLGdJQUduQixRQUFBQyxTQUFXLENBQ3RCLHNCQUF5Qix3SkFDekIseUJBQTRCLDhIQUM1Qiw2QkFBZ0MsOEdBQ2hDLHdCQUEyQiw4REFDM0Isc0JBQXlCLDJHQUdkLFFBQUFDLFVBQVksQ0FDdkIsUUFBVyxVQUNYLFFBQVcsV0FHQSxRQUFBQyxTQUFXLENBQ3RCLEdBQU0sVUFDTixHQUFNLFNBQ04sR0FBTSxVQUNOLEdBQU0sV0FDTixHQUFNLGFBQ04sR0FBTSxXQUNOLEdBQU0sY0FDTixHQUFNLFdBQ04sR0FBTSxVQUNOLEdBQU0sVUFDTixHQUFNLFNBQ04sR0FBTSxRQUNOLEdBQU0sV0FDTixHQUFNLFVBQ04sR0FBTSxPQUNOLEdBQU0sU0FDTixHQUFNLFdBQ04sR0FBTSxZQUNOLEdBQU0sUUFDTixHQUFNLFdBQ04sR0FBTSxnQkFDTixHQUFNLFdBQ04sR0FBTSxZQUNOLEdBQU0sY0FDTixHQUFNLFdBQ04sR0FBTSxVQUNOLEdBQU0sV0FDTixHQUFNLFNBQ04sR0FBTSxnQkFDTixHQUFNLGFBQ04sR0FBTSxhQUNOLEdBQU0sV0FDTixHQUFNLGlCQUNOLEdBQU0sZUFDTixHQUFNLE9BQ04sR0FBTSxXQUNOLEdBQU0sU0FDTixHQUFNLGVBQ04sR0FBTSxlQUNOLEdBQU0saUJBQ04sR0FBTSxlQUNOLEdBQU0sWUFDTixHQUFNLFFBQ04sR0FBTSxPQUNOLEdBQU0sVUFDTixHQUFNLFdBQ04sR0FBTSxhQUNOLEdBQU0sbUJBQ04sR0FBTSxnQkFDTixHQUFNLFlBQ04sR0FBTSxVLHNrQkN2VFIsa0ZBRUEsb0hBRUEsZ0JBQWUsQ0FDYkMsVUFBVyxnQ0FPYixJQUFNQyxTQUFpRCxTQUFBQyxNQUFRLE9BQzdELDhCQUFDLCtCQUFvQixZQUFLQSxNQURtQyxFQVFsRCxRQUFBQyxlQUFpQkYsU0FBU0csS0FBSyxDQUFDLEdBQzdDLFFBQUFELGVBQUEsS0FBc0IsQ0FDcEJFLFFBQVEsRUFDUkMsZ0NBQWdDLEVBQ2hDQyxXQUFZLENBQ1ZDLElBQUssQ0FDSCxFQUFHLENBQ0RDLEtBQU0saUJBQ05DLFdBQVksV0FDWkMsS0FBTSxHQUNOQyxlQUFnQixFQUNoQkMsWUFBYSxDQUNYLENBQ0VKLEtBQU0sWUFDTkssR0FBSSxFQUNKQyxTQUFTLEtBSWYsRUFBRyxDQUNETixLQUFNLGlCQUNOQyxXQUFZLFdBQ1pDLEtBQU0sR0FDTkMsZUFBZ0IsRUFDaEJDLFlBQWEsQ0FDWCxDQUNFSixLQUFNLFlBQ05LLEdBQUksRUFDSkMsU0FBUyxLQUlmLEVBQUcsQ0FDRE4sS0FBTSxpQkFDTkMsV0FBWSxXQUNaQyxLQUFNLEdBQ05DLGVBQWdCLEVBQ2hCQyxZQUFhLENBQ1gsQ0FDRUosS0FBTSxZQUNOSyxHQUFJLEVBQ0pDLFNBQVMsTUFLakJDLFFBQVMsQ0FDUCxFQUFHLENBQ0RQLEtBQU0saUJBQ05DLFdBQVksV0FDWkMsS0FBTSxHQUNOQyxlQUFnQixFQUNoQkMsWUFBYSxDQUNYLENBQ0VKLEtBQU0sWUFDTkssR0FBSSxFQUNKQyxTQUFTLEtBSWYsRUFBRyxDQUNETixLQUFNLGlCQUNOQyxXQUFZLFdBQ1pDLEtBQU0sR0FDTkMsZUFBZ0IsRUFDaEJDLFlBQWEsQ0FDWCxDQUNFSixLQUFNLFlBQ05LLEdBQUksRUFDSkMsU0FBUyxRQU9SLFFBQUFFLE1BQVFoQixTQUFTRyxLQUFLLENBQUMsR0FDcEMsUUFBQWEsTUFBQSxLQUFhLENBQ1haLFFBQVEsRUFDUkUsV0FBWSxDQUNWVyxNQUFPLGtCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmxvY2tseS1tb29jLy4vZ2VuZXJhdGVkLXNjcmlwdHMvc2hhcmVkQ29uc3RhbnRzLnRzIiwid2VicGFjazovL2Jsb2NrbHktbW9vYy8uL3NyYy9zaW1wbGVTaWduVXAvbHRpL3N5bmMvTHRpU2VjdGlvblN5bmNEaWFsb2cuc3RvcnkudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlICovXG5cbi8vIFRoaXMgaXMgYSBnZW5lcmF0ZWQgZmlsZSBhbmQgU0hPVUxEIE5PVCBCRSBFRElURUQgTUFOVUFMTFkhIVxuLy8gQ29udGVudHMgYXJlIGdlbmVyYXRlZCBhcyBwYXJ0IG9mIGdydW50IGJ1aWxkXG4vLyBTb3VyY2Ugb2YgdHJ1dGggaXMgbGliL2Nkby9zaGFyZWRfY29uc3RhbnRzLnJiIGFuZCBmaWxlcyBpbiBsaWIvY2RvL3NoYXJlZF9jb25zdGFudHMvXG5cbmV4cG9ydCBjb25zdCBEZWZhdWx0TG9jYWxlID0gJ2VuLVVTJyBhcyBjb25zdDtcblxuZXhwb3J0IGNvbnN0IEFydGlzdEF1dG9ydW5PcHRpb25zID0ge1xuICBcImZ1bGxfYXV0b19ydW5cIjogXCJGVUxMX0FVVE9fUlVOXCJcbn0gYXMgY29uc3Q7XG5cbmV4cG9ydCBjb25zdCBMZXZlbEtpbmQgPSB7XG4gIFwicGVlcl9yZXZpZXdcIjogXCJwZWVyX3Jldmlld1wiLFxuICBcImFzc2Vzc21lbnRcIjogXCJhc3Nlc3NtZW50XCIsXG4gIFwicHV6emxlXCI6IFwicHV6emxlXCIsXG4gIFwidW5wbHVnZ2VkXCI6IFwidW5wbHVnZ2VkXCIsXG4gIFwibGV2ZWxcIjogXCJsZXZlbFwiLFxuICBcInN0YWdlX2V4dHJhc1wiOiBcInN0YWdlX2V4dHJhc1wiXG59IGFzIGNvbnN0O1xuXG5leHBvcnQgY29uc3QgTGV2ZWxTdGF0dXMgPSB7XG4gIFwibm90X3RyaWVkXCI6IFwibm90X3RyaWVkXCIsXG4gIFwic3VibWl0dGVkXCI6IFwic3VibWl0dGVkXCIsXG4gIFwicGVyZmVjdFwiOiBcInBlcmZlY3RcIixcbiAgXCJwYXNzZWRcIjogXCJwYXNzZWRcIixcbiAgXCJhdHRlbXB0ZWRcIjogXCJhdHRlbXB0ZWRcIixcbiAgXCJyZXZpZXdfYWNjZXB0ZWRcIjogXCJyZXZpZXdfYWNjZXB0ZWRcIixcbiAgXCJyZXZpZXdfcmVqZWN0ZWRcIjogXCJyZXZpZXdfcmVqZWN0ZWRcIixcbiAgXCJkb3RzX2Rpc2FibGVkXCI6IFwiZG90c19kaXNhYmxlZFwiLFxuICBcImZyZWVfcGxheV9jb21wbGV0ZVwiOiBcImZyZWVfcGxheV9jb21wbGV0ZVwiLFxuICBcImNvbXBsZXRlZF9hc3Nlc3NtZW50XCI6IFwiY29tcGxldGVkX2Fzc2Vzc21lbnRcIlxufSBhcyBjb25zdDtcblxuZXhwb3J0IGNvbnN0IFNlY3Rpb25Mb2dpblR5cGUgPSB7XG4gIFwid29yZFwiOiBcIndvcmRcIixcbiAgXCJwaWN0dXJlXCI6IFwicGljdHVyZVwiLFxuICBcImVtYWlsXCI6IFwiZW1haWxcIixcbiAgXCJnb29nbGVfY2xhc3Nyb29tXCI6IFwiZ29vZ2xlX2NsYXNzcm9vbVwiLFxuICBcImNsZXZlclwiOiBcImNsZXZlclwiLFxuICBcImx0aV92MVwiOiBcImx0aV92MVwiXG59IGFzIGNvbnN0O1xuXG5leHBvcnQgY29uc3QgU3R1ZGVudEdyYWRlTGV2ZWxzID0gW1xuICBcIktcIixcbiAgXCIxXCIsXG4gIFwiMlwiLFxuICBcIjNcIixcbiAgXCI0XCIsXG4gIFwiNVwiLFxuICBcIjZcIixcbiAgXCI3XCIsXG4gIFwiOFwiLFxuICBcIjlcIixcbiAgXCIxMFwiLFxuICBcIjExXCIsXG4gIFwiMTJcIixcbiAgXCJPdGhlclwiXG5dIGFzIGNvbnN0O1xuXG5leHBvcnQgY29uc3QgUGxHcmFkZVZhbHVlID0gJ3BsJyBhcyBjb25zdDtcblxuZXhwb3J0IGNvbnN0IFBvc3RNaWxlc3RvbmVNb2RlID0ge1xuICBcImFsbFwiOiBcImFsbFwiLFxuICBcInN1Y2Nlc3NmdWxfcnVuc19hbmRfZmluYWxfbGV2ZWxfb25seVwiOiBcInN1Y2Nlc3NmdWxfcnVuc19hbmRfZmluYWxfbGV2ZWxfb25seVwiLFxuICBcImZpbmFsX2xldmVsX29ubHlcIjogXCJmaW5hbF9sZXZlbF9vbmx5XCJcbn0gYXMgY29uc3Q7XG5cbmV4cG9ydCBjb25zdCBBbHdheXNQdWJsaXNoYWJsZVByb2plY3RUeXBlcyA9IFtcbiAgXCJhcnRpc3RcIixcbiAgXCJmcm96ZW5cIixcbiAgXCJwbGF5bGFiXCIsXG4gIFwiZ3VtYmFsbFwiLFxuICBcImljZWFnZVwiLFxuICBcImluZmluaXR5XCIsXG4gIFwibWluZWNyYWZ0X2FkdmVudHVyZXJcIixcbiAgXCJtaW5lY3JhZnRfZGVzaWduZXJcIixcbiAgXCJtaW5lY3JhZnRfaGVyb1wiLFxuICBcIm1pbmVjcmFmdF9hcXVhdGljXCIsXG4gIFwic3RhcndhcnNcIixcbiAgXCJzdGFyd2Fyc2Jsb2Nrc1wiLFxuICBcInN0YXJ3YXJzYmxvY2tzX2hvdXJcIixcbiAgXCJmbGFwcHlcIixcbiAgXCJib3VuY2VcIixcbiAgXCJzcG9ydHNcIixcbiAgXCJiYXNrZXRiYWxsXCIsXG4gIFwiYXJ0aXN0X2sxXCIsXG4gIFwicGxheWxhYl9rMVwiLFxuICBcImRhbmNlXCIsXG4gIFwicG9ldHJ5XCIsXG4gIFwicG9ldHJ5X2hvY1wiLFxuICBcInRoZWJhZGd1eXNcIixcbiAgXCJtdXNpY1wiXG5dIGFzIGNvbnN0O1xuXG5leHBvcnQgY29uc3QgQWxsUHVibGlzaGFibGVQcm9qZWN0VHlwZXMgPSBbXG4gIFwiYXJ0aXN0XCIsXG4gIFwiZnJvemVuXCIsXG4gIFwicGxheWxhYlwiLFxuICBcImd1bWJhbGxcIixcbiAgXCJpY2VhZ2VcIixcbiAgXCJpbmZpbml0eVwiLFxuICBcIm1pbmVjcmFmdF9hZHZlbnR1cmVyXCIsXG4gIFwibWluZWNyYWZ0X2Rlc2lnbmVyXCIsXG4gIFwibWluZWNyYWZ0X2hlcm9cIixcbiAgXCJtaW5lY3JhZnRfYXF1YXRpY1wiLFxuICBcInN0YXJ3YXJzXCIsXG4gIFwic3RhcndhcnNibG9ja3NcIixcbiAgXCJzdGFyd2Fyc2Jsb2Nrc19ob3VyXCIsXG4gIFwiZmxhcHB5XCIsXG4gIFwiYm91bmNlXCIsXG4gIFwic3BvcnRzXCIsXG4gIFwiYmFza2V0YmFsbFwiLFxuICBcImFydGlzdF9rMVwiLFxuICBcInBsYXlsYWJfazFcIixcbiAgXCJkYW5jZVwiLFxuICBcInBvZXRyeVwiLFxuICBcInBvZXRyeV9ob2NcIixcbiAgXCJ0aGViYWRndXlzXCIsXG4gIFwibXVzaWNcIixcbiAgXCJhcHBsYWJcIixcbiAgXCJnYW1lbGFiXCIsXG4gIFwic3ByaXRlbGFiXCJcbl0gYXMgY29uc3Q7XG5cbmV4cG9ydCBjb25zdCBDb25kaXRpb25hbGx5UHVibGlzaGFibGVQcm9qZWN0VHlwZXMgPSBbXG4gIFwiYXBwbGFiXCIsXG4gIFwiZ2FtZWxhYlwiXG5dIGFzIGNvbnN0O1xuXG5leHBvcnQgY29uc3QgQWJ1c2VDb25zdGFudHMgPSB7XG4gIFwiQUJVU0VfVEhSRVNIT0xEXCI6IDE1XG59IGFzIGNvbnN0O1xuXG5leHBvcnQgY29uc3QgRXJyb3JTZXZlcml0eUxldmVscyA9IHtcbiAgXCJXQVJOXCI6IDIsXG4gIFwiRVJST1JcIjogMyxcbiAgXCJGQVRBTFwiOiA0XG59IGFzIGNvbnN0O1xuXG5leHBvcnQgY29uc3QgUmVzdHJpY3RlZFB1Ymxpc2hQcm9qZWN0VHlwZXMgPSBbXG4gIFwic3ByaXRlbGFiXCJcbl0gYXMgY29uc3Q7XG5cbmV4cG9ydCBjb25zdCBSdWJyaWNVbmRlcnN0YW5kaW5nTGV2ZWxzID0ge1xuICBcIkVYVEVOU0lWRVwiOiAzLFxuICBcIkNPTlZJTkNJTkdcIjogMixcbiAgXCJMSU1JVEVEXCI6IDEsXG4gIFwiTk9ORVwiOiAwXG59IGFzIGNvbnN0O1xuXG5leHBvcnQgY29uc3QgUnVicmljQWlFdmFsdWF0aW9uU3RhdHVzID0ge1xuICBcIlFVRVVFRFwiOiAwLFxuICBcIlJVTk5JTkdcIjogMSxcbiAgXCJTVUNDRVNTXCI6IDIsXG4gIFwiRkFJTFVSRVwiOiAxMDAwLFxuICBcIlBJSV9WSU9MQVRJT05cIjogMTAwMSxcbiAgXCJQUk9GQU5JVFlfVklPTEFUSU9OXCI6IDEwMDIsXG4gIFwiUkVRVUVTVF9UT09fTEFSR0VcIjogMTAwMyxcbiAgXCJTVFVERU5UX0xJTUlUX0VYQ0VFREVEXCI6IDEwMDQsXG4gIFwiVEVBQ0hFUl9MSU1JVF9FWENFRURFRFwiOiAxMDA1XG59IGFzIGNvbnN0O1xuXG5leHBvcnQgY29uc3QgUnVicmljQWlFdmFsdWF0aW9uTGltaXRzID0ge1xuICBcIlNUVURFTlRfTElNSVRcIjogMTAsXG4gIFwiVEVBQ0hFUl9MSU1JVFwiOiAxMFxufSBhcyBjb25zdDtcblxuZXhwb3J0IGNvbnN0IEVtYWlsTGlua3MgPSB7XG4gIFwiUFJJVkFDWV9QT0xJQ1lfVVJMXCI6IFwiaHR0cHM6Ly9jb2RlLm9yZy9wcml2YWN5XCIsXG4gIFwiQ09OVEFDVF9VU19VUkxcIjogXCJodHRwczovL2NvZGUub3JnL2NvbnRhY3RcIixcbiAgXCJUT1NfVVJMXCI6IFwiaHR0cHM6Ly9jb2RlLm9yZy90b3NcIixcbiAgXCJTVFVERU5UX1BSSVZBQ1lfUExFREdFX1VSTFwiOiBcImh0dHBzOi8vc3R1ZGVudHByaXZhY3lwbGVkZ2Uub3JnL3NpZ25hdG9yaWVzL1wiLFxuICBcIkNPTU1PTl9TRU5TRV9NRURJQV9VUkxcIjogXCJodHRwczovL3ByaXZhY3kuY29tbW9uc2Vuc2Uub3JnL2V2YWx1YXRpb24vY29kZS5vcmdcIixcbiAgXCJDRE9fU1VQUE9SVF9NQUlMVE9cIjogXCJtYWlsdG86c3VwcG9ydEBjb2RlLm9yZ1wiXG59IGFzIGNvbnN0O1xuXG5leHBvcnQgY29uc3QgQ2hpbGRBY2NvdW50Q29tcGxpYW5jZVN0YXRlcyA9IHtcbiAgXCJHUkFDRV9QRVJJT0RcIjogXCJwXCIsXG4gIFwiTE9DS0VEX09VVFwiOiBcImxcIixcbiAgXCJQRVJNSVNTSU9OX0dSQU5URURcIjogXCJnXCJcbn0gYXMgY29uc3Q7XG5cbmV4cG9ydCBjb25zdCBDZW5zdXNDb25zdGFudHMgPSB7XG4gIFwiQ1VSUkVOVF9DRU5TVVNfU0NIT09MX1lFQVJcIjogMjAyM1xufSBhcyBjb25zdDtcblxuZXhwb3J0IGNvbnN0IERhbmNlU29uZ01hbmlmZXN0RmlsZW5hbWUgPSAnc29uZ01hbmlmZXN0MjAyNF92Mi5qc29uJyBhcyBjb25zdDtcblxuZXhwb3J0IGNvbnN0IEFpSW50ZXJhY3Rpb25TdGF0dXMgPSB7XG4gIFwiRVJST1JcIjogXCJlcnJvclwiLFxuICBcIlBJSV9WSU9MQVRJT05cIjogXCJwaWlfdmlvbGF0aW9uXCIsXG4gIFwiUFJPRkFOSVRZX1ZJT0xBVElPTlwiOiBcInByb2Zhbml0eV92aW9sYXRpb25cIixcbiAgXCJVU0VSX0lOUFVUX1RPT19MQVJHRVwiOiBcInVzZXJfaW5wdXRfdG9vX2xhcmdlXCIsXG4gIFwiT0tcIjogXCJva1wiLFxuICBcIlVOS05PV05cIjogXCJ1bmtub3duXCJcbn0gYXMgY29uc3Q7XG5cbmV4cG9ydCBjb25zdCBBaVR1dG9ySW50ZXJhY3Rpb25TdGF0dXMgPSB7XG4gIFwiRVJST1JcIjogXCJlcnJvclwiLFxuICBcIlBJSV9WSU9MQVRJT05cIjogXCJwaWlfdmlvbGF0aW9uXCIsXG4gIFwiUFJPRkFOSVRZX1ZJT0xBVElPTlwiOiBcInByb2Zhbml0eV92aW9sYXRpb25cIixcbiAgXCJVU0VSX0lOUFVUX1RPT19MQVJHRVwiOiBcInVzZXJfaW5wdXRfdG9vX2xhcmdlXCIsXG4gIFwiT0tcIjogXCJva1wiLFxuICBcIlVOS05PV05cIjogXCJ1bmtub3duXCJcbn0gYXMgY29uc3Q7XG5cbmV4cG9ydCBjb25zdCBBaVR1dG9yVHlwZXMgPSB7XG4gIFwiQ09NUElMQVRJT05cIjogXCJjb21waWxhdGlvblwiLFxuICBcIlZBTElEQVRJT05cIjogXCJ2YWxpZGF0aW9uXCIsXG4gIFwiR0VORVJBTF9DSEFUXCI6IFwiZ2VuZXJhbF9jaGF0XCJcbn0gYXMgY29uc3Q7XG5cbmV4cG9ydCBjb25zdCBBaVJlcXVlc3RFeGVjdXRpb25TdGF0dXMgPSB7XG4gIFwiTk9UX1NUQVJURURcIjogMCxcbiAgXCJRVUVVRURcIjogMSxcbiAgXCJSVU5OSU5HXCI6IDIsXG4gIFwiU1VDQ0VTU1wiOiAzLFxuICBcIkZBSUxVUkVcIjogMTAwMCxcbiAgXCJVU0VSX1BST0ZBTklUWVwiOiAxMDAxLFxuICBcIlVTRVJfUElJXCI6IDEwMDIsXG4gIFwiTU9ERUxfUFJPRkFOSVRZXCI6IDEwMDMsXG4gIFwiTU9ERUxfUElJXCI6IDEwMDQsXG4gIFwiVVNFUl9JTlBVVF9UT09fTEFSR0VcIjogMTAwNVxufSBhcyBjb25zdDtcblxuZXhwb3J0IGNvbnN0IEFpQ2hhdE1vZGVsSWRzID0ge1xuICBcIkFSSVRITU9cIjogXCJnZW4tYWktYXJpdGhtbzItbWlzdHJhbC03YlwiLFxuICBcIkJJT01JU1RSQUxcIjogXCJnZW4tYWktYmlvbWlzdHJhbC03YlwiLFxuICBcIk1JU1RSQUxcIjogXCJnZW4tYWktbWlzdHJhbC03Yi1pbnN0LXYwMVwiLFxuICBcIktBUkVOXCI6IFwiZ2VuLWFpLWthcmVuLWNyZWF0aXZlLW1pc3RyYWwtN2JcIixcbiAgXCJQSVJBVEVcIjogXCJnZW4tYWktbWlzdHJhbC1waXJhdGUtN2JcIlxufSBhcyBjb25zdDtcblxuZXhwb3J0IGNvbnN0IEZlYXR1cmVkUHJvamVjdFN0YXR1cyA9IHtcbiAgXCJhY3RpdmVcIjogXCJhY3RpdmVcIixcbiAgXCJib29rbWFya2VkXCI6IFwiYm9va21hcmtlZFwiLFxuICBcImFyY2hpdmVkXCI6IFwiYXJjaGl2ZWRcIlxufSBhcyBjb25zdDtcblxuZXhwb3J0IGNvbnN0IEZlYXR1cmVkUHJvamVjdENvbnN0YW50cyA9IHtcbiAgXCJNQVhfUkVRVUVTVFNfUEVSX0NBVEVHT1JZXCI6IDE1XG59IGFzIGNvbnN0O1xuXG5leHBvcnQgY29uc3QgQ2FwTGlua3MgPSB7XG4gIFwiUEFSRU5UQUxfQ09OU0VOVF9HVUlERV9VUkxcIjogXCJodHRwczovL3N1cHBvcnQuY29kZS5vcmcvaGMvZW4tdXMvYXJ0aWNsZXMvMTU0NjU0MjM0OTEwODUtSG93LWRvLUktb2J0YWluLXBhcmVudC1vci1ndWFyZGlhbi1wZXJtaXNzaW9uLWZvci1zdHVkZW50LWFjY291bnRzXCJcbn0gYXMgY29uc3Q7XG5cbmV4cG9ydCBjb25zdCBMbXNMaW5rcyA9IHtcbiAgXCJJTlRFR1JBVElPTl9HVUlERV9VUkxcIjogXCJodHRwczovL3N1cHBvcnQuY29kZS5vcmcvaGMvZW4tdXMvYXJ0aWNsZXMvMjMxMjAwMTQ0NTk0MDUtTGVhcm5pbmctTWFuYWdlbWVudC1TeXN0ZW0tTE1TLWFuZC1TaW5nbGUtU2lnbi1Pbi1TU08tSW50ZWdyYXRpb25zLWFuZC1TdXBwb3J0LWZvci1Db2RlLW9yZ1wiLFxuICBcIklOU1RBTExfSU5TVFJVQ1RJT05TX1VSTFwiOiBcImh0dHBzOi8vc3VwcG9ydC5jb2RlLm9yZy9oYy9lbi11cy9hcnRpY2xlcy8yMzYyMTkwNzUzMzk2NS1JbnN0YWxsLUNvZGUtb3JnLUludGVncmF0aW9ucy1mb3IteW91ci1MZWFybmluZy1NYW5hZ2VtZW50LVN5c3RlbVwiLFxuICBcIlJPU1RFUl9TWU5DX0lOU1RSVUNUSU9OU19VUkxcIjogXCJodHRwczovL3N1cHBvcnQuY29kZS5vcmcvaGMvZW4tdXMvYXJ0aWNsZXMvMjM2MjE5Nzg2NTQ2MDUtU3luYy1Sb3N0ZXJzLXdpdGgteW91ci1MZWFybmluZy1NYW5hZ2VtZW50LVN5c3RlbVwiLFxuICBcIkFERElUSU9OQUxfRkVFREJBQ0tfVVJMXCI6IFwiaHR0cHM6Ly9zdHVkaW8uY29kZS5vcmcvZm9ybS9sbXNfaW50ZWdyYXRpb25fbW9kYWxfZmVlZGJhY2tcIixcbiAgXCJTVVBQT1JURURfTUVUSE9EU19VUkxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vY29kZS1kb3Qtb3JnL2NvZGUtZG90LW9yZy9ibG9iL3N0YWdpbmcvZG9jcy9sdGktaW50ZWdyYXRpb24ubWQjb3B0aW9uLTItbWFudWFsLWVudHJ5XCJcbn0gYXMgY29uc3Q7XG5cbmV4cG9ydCBjb25zdCBVc2VyVHlwZXMgPSB7XG4gIFwiU1RVREVOVFwiOiBcInN0dWRlbnRcIixcbiAgXCJURUFDSEVSXCI6IFwidGVhY2hlclwiXG59IGFzIGNvbnN0O1xuXG5leHBvcnQgY29uc3QgVXNTdGF0ZXMgPSB7XG4gIFwiQUxcIjogXCJBbGFiYW1hXCIsXG4gIFwiQUtcIjogXCJBbGFza2FcIixcbiAgXCJBWlwiOiBcIkFyaXpvbmFcIixcbiAgXCJBUlwiOiBcIkFya2Fuc2FzXCIsXG4gIFwiQ0FcIjogXCJDYWxpZm9ybmlhXCIsXG4gIFwiQ09cIjogXCJDb2xvcmFkb1wiLFxuICBcIkNUXCI6IFwiQ29ubmVjdGljdXRcIixcbiAgXCJERVwiOiBcIkRlbGF3YXJlXCIsXG4gIFwiRkxcIjogXCJGbG9yaWRhXCIsXG4gIFwiR0FcIjogXCJHZW9yZ2lhXCIsXG4gIFwiSElcIjogXCJIYXdhaWlcIixcbiAgXCJJRFwiOiBcIklkYWhvXCIsXG4gIFwiSUxcIjogXCJJbGxpbm9pc1wiLFxuICBcIklOXCI6IFwiSW5kaWFuYVwiLFxuICBcIklBXCI6IFwiSW93YVwiLFxuICBcIktTXCI6IFwiS2Fuc2FzXCIsXG4gIFwiS1lcIjogXCJLZW50dWNreVwiLFxuICBcIkxBXCI6IFwiTG91aXNpYW5hXCIsXG4gIFwiTUVcIjogXCJNYWluZVwiLFxuICBcIk1EXCI6IFwiTWFyeWxhbmRcIixcbiAgXCJNQVwiOiBcIk1hc3NhY2h1c2V0dHNcIixcbiAgXCJNSVwiOiBcIk1pY2hpZ2FuXCIsXG4gIFwiTU5cIjogXCJNaW5uZXNvdGFcIixcbiAgXCJNU1wiOiBcIk1pc3Npc3NpcHBpXCIsXG4gIFwiTU9cIjogXCJNaXNzb3VyaVwiLFxuICBcIk1UXCI6IFwiTW9udGFuYVwiLFxuICBcIk5FXCI6IFwiTmVicmFza2FcIixcbiAgXCJOVlwiOiBcIk5ldmFkYVwiLFxuICBcIk5IXCI6IFwiTmV3IEhhbXBzaGlyZVwiLFxuICBcIk5KXCI6IFwiTmV3IEplcnNleVwiLFxuICBcIk5NXCI6IFwiTmV3IE1leGljb1wiLFxuICBcIk5ZXCI6IFwiTmV3IFlvcmtcIixcbiAgXCJOQ1wiOiBcIk5vcnRoIENhcm9saW5hXCIsXG4gIFwiTkRcIjogXCJOb3J0aCBEYWtvdGFcIixcbiAgXCJPSFwiOiBcIk9oaW9cIixcbiAgXCJPS1wiOiBcIk9rbGFob21hXCIsXG4gIFwiT1JcIjogXCJPcmVnb25cIixcbiAgXCJQQVwiOiBcIlBlbm5zeWx2YW5pYVwiLFxuICBcIlJJXCI6IFwiUmhvZGUgSXNsYW5kXCIsXG4gIFwiU0NcIjogXCJTb3V0aCBDYXJvbGluYVwiLFxuICBcIlNEXCI6IFwiU291dGggRGFrb3RhXCIsXG4gIFwiVE5cIjogXCJUZW5uZXNzZWVcIixcbiAgXCJUWFwiOiBcIlRleGFzXCIsXG4gIFwiVVRcIjogXCJVdGFoXCIsXG4gIFwiVlRcIjogXCJWZXJtb250XCIsXG4gIFwiVkFcIjogXCJWaXJnaW5pYVwiLFxuICBcIldBXCI6IFwiV2FzaGluZ3RvblwiLFxuICBcIkRDXCI6IFwiV2FzaGluZ3RvbiwgRC5DLlwiLFxuICBcIldWXCI6IFwiV2VzdCBWaXJnaW5pYVwiLFxuICBcIldJXCI6IFwiV2lzY29uc2luXCIsXG4gIFwiV1lcIjogXCJXeW9taW5nXCJcbn0gYXMgY29uc3Q7XG4iLCJpbXBvcnQge1N0b3J5Rm59IGZyb20gJ0BzdG9yeWJvb2svcmVhY3QnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IEx0aVNlY3Rpb25TeW5jRGlhbG9nIGZyb20gJ0BjZG8vYXBwcy9zaW1wbGVTaWduVXAvbHRpL3N5bmMvTHRpU2VjdGlvblN5bmNEaWFsb2cnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXBvbmVudDogTHRpU2VjdGlvblN5bmNEaWFsb2csXG59O1xuXG4vL1xuLy8gVEVNUExBVEVcbi8vXG5cbmNvbnN0IFRlbXBsYXRlOiBTdG9yeUZuPHR5cGVvZiBMdGlTZWN0aW9uU3luY0RpYWxvZz4gPSBhcmdzID0+IChcbiAgPEx0aVNlY3Rpb25TeW5jRGlhbG9nIHsuLi5hcmdzfSAvPlxuKTtcblxuLy9cbi8vIFNUT1JJRVNcbi8vXG5cbmV4cG9ydCBjb25zdCBTdWNjZXNzZnVsU3luYyA9IFRlbXBsYXRlLmJpbmQoe30pO1xuU3VjY2Vzc2Z1bFN5bmMuYXJncyA9IHtcbiAgaXNPcGVuOiB0cnVlLFxuICBkaXNhYmxlUm9zdGVyU3luY0J1dHRvbkVuYWJsZWQ6IHRydWUsXG4gIHN5bmNSZXN1bHQ6IHtcbiAgICBhbGw6IHtcbiAgICAgIDE6IHtcbiAgICAgICAgbmFtZTogJ0NTRCAtIFBlcmlvZCAxJyxcbiAgICAgICAgc2hvcnRfbmFtZTogJ1BlcmlvZCAxJyxcbiAgICAgICAgc2l6ZTogMzQsXG4gICAgICAgIGx0aV9zZWN0aW9uX2lkOiAxLFxuICAgICAgICBpbnN0cnVjdG9yczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdUZWFjaGVyIDEnLFxuICAgICAgICAgICAgaWQ6IDAsXG4gICAgICAgICAgICBpc093bmVyOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAgMjoge1xuICAgICAgICBuYW1lOiAnQ1NEIC0gUGVyaW9kIDInLFxuICAgICAgICBzaG9ydF9uYW1lOiAnUGVyaW9kIDInLFxuICAgICAgICBzaXplOiAyNyxcbiAgICAgICAgbHRpX3NlY3Rpb25faWQ6IDIsXG4gICAgICAgIGluc3RydWN0b3JzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ1RlYWNoZXIgMScsXG4gICAgICAgICAgICBpZDogMCxcbiAgICAgICAgICAgIGlzT3duZXI6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICAzOiB7XG4gICAgICAgIG5hbWU6ICdDU0QgLSBQZXJpb2QgMycsXG4gICAgICAgIHNob3J0X25hbWU6ICdQZXJpb2QgMycsXG4gICAgICAgIHNpemU6IDMyLFxuICAgICAgICBsdGlfc2VjdGlvbl9pZDogMyxcbiAgICAgICAgaW5zdHJ1Y3RvcnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnVGVhY2hlciAxJyxcbiAgICAgICAgICAgIGlkOiAwLFxuICAgICAgICAgICAgaXNPd25lcjogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGNoYW5nZWQ6IHtcbiAgICAgIDI6IHtcbiAgICAgICAgbmFtZTogJ0NTRCAtIFBlcmlvZCAyJyxcbiAgICAgICAgc2hvcnRfbmFtZTogJ1BlcmlvZCAyJyxcbiAgICAgICAgc2l6ZTogMjcsXG4gICAgICAgIGx0aV9zZWN0aW9uX2lkOiAyLFxuICAgICAgICBpbnN0cnVjdG9yczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdUZWFjaGVyIDEnLFxuICAgICAgICAgICAgaWQ6IDAsXG4gICAgICAgICAgICBpc093bmVyOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAgMzoge1xuICAgICAgICBuYW1lOiAnQ1NEIC0gUGVyaW9kIDMnLFxuICAgICAgICBzaG9ydF9uYW1lOiAnUGVyaW9kIDMnLFxuICAgICAgICBzaXplOiAzMixcbiAgICAgICAgbHRpX3NlY3Rpb25faWQ6IDMsXG4gICAgICAgIGluc3RydWN0b3JzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ1RlYWNoZXIgMScsXG4gICAgICAgICAgICBpZDogMCxcbiAgICAgICAgICAgIGlzT3duZXI6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn07XG5leHBvcnQgY29uc3QgRXJyb3IgPSBUZW1wbGF0ZS5iaW5kKHt9KTtcbkVycm9yLmFyZ3MgPSB7XG4gIGlzT3BlbjogdHJ1ZSxcbiAgc3luY1Jlc3VsdDoge1xuICAgIGVycm9yOiAnbm9faW50ZWdyYXRpb24nLFxuICB9LFxufTtcbiJdLCJuYW1lcyI6WyJEZWZhdWx0TG9jYWxlIiwiQXJ0aXN0QXV0b3J1bk9wdGlvbnMiLCJMZXZlbEtpbmQiLCJMZXZlbFN0YXR1cyIsIlNlY3Rpb25Mb2dpblR5cGUiLCJTdHVkZW50R3JhZGVMZXZlbHMiLCJQbEdyYWRlVmFsdWUiLCJQb3N0TWlsZXN0b25lTW9kZSIsIkFsd2F5c1B1Ymxpc2hhYmxlUHJvamVjdFR5cGVzIiwiQWxsUHVibGlzaGFibGVQcm9qZWN0VHlwZXMiLCJDb25kaXRpb25hbGx5UHVibGlzaGFibGVQcm9qZWN0VHlwZXMiLCJBYnVzZUNvbnN0YW50cyIsIkVycm9yU2V2ZXJpdHlMZXZlbHMiLCJSZXN0cmljdGVkUHVibGlzaFByb2plY3RUeXBlcyIsIlJ1YnJpY1VuZGVyc3RhbmRpbmdMZXZlbHMiLCJSdWJyaWNBaUV2YWx1YXRpb25TdGF0dXMiLCJSdWJyaWNBaUV2YWx1YXRpb25MaW1pdHMiLCJFbWFpbExpbmtzIiwiQ2hpbGRBY2NvdW50Q29tcGxpYW5jZVN0YXRlcyIsIkNlbnN1c0NvbnN0YW50cyIsIkRhbmNlU29uZ01hbmlmZXN0RmlsZW5hbWUiLCJBaUludGVyYWN0aW9uU3RhdHVzIiwiQWlUdXRvckludGVyYWN0aW9uU3RhdHVzIiwiQWlUdXRvclR5cGVzIiwiQWlSZXF1ZXN0RXhlY3V0aW9uU3RhdHVzIiwiQWlDaGF0TW9kZWxJZHMiLCJGZWF0dXJlZFByb2plY3RTdGF0dXMiLCJGZWF0dXJlZFByb2plY3RDb25zdGFudHMiLCJDYXBMaW5rcyIsIkxtc0xpbmtzIiwiVXNlclR5cGVzIiwiVXNTdGF0ZXMiLCJjb21wb25lbnQiLCJUZW1wbGF0ZSIsImFyZ3MiLCJTdWNjZXNzZnVsU3luYyIsImJpbmQiLCJpc09wZW4iLCJkaXNhYmxlUm9zdGVyU3luY0J1dHRvbkVuYWJsZWQiLCJzeW5jUmVzdWx0IiwiYWxsIiwibmFtZSIsInNob3J0X25hbWUiLCJzaXplIiwibHRpX3NlY3Rpb25faWQiLCJpbnN0cnVjdG9ycyIsImlkIiwiaXNPd25lciIsImNoYW5nZWQiLCJFcnJvciIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==