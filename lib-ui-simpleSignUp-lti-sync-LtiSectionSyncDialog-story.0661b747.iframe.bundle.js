"use strict";(self.webpackChunkblockly_mooc=self.webpackChunkblockly_mooc||[]).push([[4766],{"./generated-scripts/sharedConstants.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AbuseConstants:()=>AbuseConstants,AiInteractionStatus:()=>AiInteractionStatus,AiTutorInteractionStatus:()=>AiTutorInteractionStatus,AiTutorTypes:()=>AiTutorTypes,AllPublishableProjectTypes:()=>AllPublishableProjectTypes,AlwaysPublishableProjectTypes:()=>AlwaysPublishableProjectTypes,ArtistAutorunOptions:()=>ArtistAutorunOptions,CensusConstants:()=>CensusConstants,ChildAccountComplianceStates:()=>ChildAccountComplianceStates,ConditionallyPublishableProjectTypes:()=>ConditionallyPublishableProjectTypes,DanceSongManifestFilename:()=>DanceSongManifestFilename,DefaultLocale:()=>DefaultLocale,EmailLinks:()=>EmailLinks,ErrorSeverityLevels:()=>ErrorSeverityLevels,FeaturedProjectConstants:()=>FeaturedProjectConstants,FeaturedProjectStatus:()=>FeaturedProjectStatus,LevelKind:()=>LevelKind,LevelStatus:()=>LevelStatus,LmsLinks:()=>LmsLinks,PlGradeValue:()=>PlGradeValue,PostMilestoneMode:()=>PostMilestoneMode,RestrictedPublishProjectTypes:()=>RestrictedPublishProjectTypes,RubricAiEvaluationStatus:()=>RubricAiEvaluationStatus,RubricUnderstandingLevels:()=>RubricUnderstandingLevels,SectionLoginType:()=>SectionLoginType,StudentGradeLevels:()=>StudentGradeLevels,UserTypes:()=>UserTypes});const DefaultLocale="en-US",ArtistAutorunOptions={full_auto_run:"FULL_AUTO_RUN"},LevelKind={peer_review:"peer_review",assessment:"assessment",puzzle:"puzzle",unplugged:"unplugged",level:"level",stage_extras:"stage_extras"},LevelStatus={not_tried:"not_tried",submitted:"submitted",perfect:"perfect",passed:"passed",attempted:"attempted",review_accepted:"review_accepted",review_rejected:"review_rejected",dots_disabled:"dots_disabled",free_play_complete:"free_play_complete",completed_assessment:"completed_assessment"},SectionLoginType={word:"word",picture:"picture",email:"email",google_classroom:"google_classroom",clever:"clever",lti_v1:"lti_v1"},StudentGradeLevels=["K","1","2","3","4","5","6","7","8","9","10","11","12","Other"],PlGradeValue="pl",PostMilestoneMode={all:"all",successful_runs_and_final_level_only:"successful_runs_and_final_level_only",final_level_only:"final_level_only"},AlwaysPublishableProjectTypes=["artist","frozen","playlab","gumball","iceage","infinity","minecraft_adventurer","minecraft_designer","minecraft_hero","minecraft_aquatic","starwars","starwarsblocks","starwarsblocks_hour","flappy","bounce","sports","basketball","artist_k1","playlab_k1","dance","poetry","poetry_hoc","thebadguys","music"],AllPublishableProjectTypes=["artist","frozen","playlab","gumball","iceage","infinity","minecraft_adventurer","minecraft_designer","minecraft_hero","minecraft_aquatic","starwars","starwarsblocks","starwarsblocks_hour","flappy","bounce","sports","basketball","artist_k1","playlab_k1","dance","poetry","poetry_hoc","thebadguys","music","applab","gamelab","spritelab"],ConditionallyPublishableProjectTypes=["applab","gamelab"],AbuseConstants={ABUSE_THRESHOLD:15},ErrorSeverityLevels={WARN:2,ERROR:3,FATAL:4},RestrictedPublishProjectTypes=["spritelab"],RubricUnderstandingLevels={EXTENSIVE:3,CONVINCING:2,LIMITED:1,NONE:0},RubricAiEvaluationStatus={QUEUED:0,RUNNING:1,SUCCESS:2,FAILURE:1e3,PII_VIOLATION:1001,PROFANITY_VIOLATION:1002,REQUEST_TOO_LARGE:1003},EmailLinks={PRIVACY_POLICY_URL:"https://code.org/privacy",CONTACT_US_URL:"https://code.org/contact",TOS_URL:"https://code.org/tos",STUDENT_PRIVACY_PLEDGE_URL:"https://studentprivacypledge.org/signatories/",COMMON_SENSE_MEDIA_URL:"https://privacy.commonsense.org/evaluation/code.org",CDO_SUPPORT_MAILTO:"mailto:support@code.org"},ChildAccountComplianceStates={GRACE_PERIOD:"p",LOCKED_OUT:"l",PERMISSION_GRANTED:"g"},CensusConstants={CURRENT_CENSUS_SCHOOL_YEAR:2023},DanceSongManifestFilename="songManifest2024_v2.json",AiInteractionStatus={ERROR:"error",PII_VIOLATION:"pii_violation",PROFANITY_VIOLATION:"profanity_violation",OK:"ok",UNKNOWN:"unknown"},AiTutorInteractionStatus={ERROR:"error",PII_VIOLATION:"pii_violation",PROFANITY_VIOLATION:"profanity_violation",OK:"ok",UNKNOWN:"unknown"},AiTutorTypes={COMPILATION:"compilation",VALIDATION:"validation",GENERAL_CHAT:"general_chat"},FeaturedProjectStatus={active:"active",bookmarked:"bookmarked",archived:"archived"},FeaturedProjectConstants={MAX_REQUESTS_PER_CATEGORY:15},LmsLinks={INTEGRATION_GUIDE_URL:"https://support.code.org/hc/en-us/articles/23120014459405-Learning-Management-System-LMS-and-Single-Sign-On-SSO-Integrations-and-Support-for-Code-org",INSTALL_INSTRUCTIONS_URL:"https://support.code.org/hc/en-us/articles/23621907533965-Install-Code-org-Integrations-for-your-Learning-Management-System",INSTALL_GUIDE_FOR_CANVAS_URL:"https://support.code.org/hc/en-us/articles/23123273783437-Install-the-Code-org-Integration-for-Canvas",ROSTER_SYNC_INSTRUCTIONS_URL:"https://support.code.org/hc/en-us/articles/23621978654605-Sync-Rosters-with-your-Learning-Management-System",ADDITIONAL_FEEDBACK_URL:"https://studio.code.org/form/lms_integration_modal_feedback",SUPPORTED_METHODS_URL:"https://github.com/code-dot-org/code-dot-org/blob/staging/docs/lti-integration.md#option-2-manual-entry"},UserTypes={STUDENT:"student",TEACHER:"teacher"}},"./src/lib/ui/simpleSignUp/lti/sync/LtiSectionSyncDialog.story.tsx":function(__unused_webpack_module,exports,__webpack_require__){var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.Error=exports.SuccessfulSync=void 0;var react_1=__importDefault(__webpack_require__("./node_modules/react/index.js")),LtiSectionSyncDialog_1=__importDefault(__webpack_require__("./src/lib/ui/simpleSignUp/lti/sync/LtiSectionSyncDialog.tsx"));exports.default={component:LtiSectionSyncDialog_1.default};var Template=function(args){return react_1.default.createElement(LtiSectionSyncDialog_1.default,__assign({},args))};exports.SuccessfulSync=Template.bind({}),exports.SuccessfulSync.args={isOpen:!0,disableRosterSyncButtonEnabled:!0,syncResult:{all:{1:{name:"CSD - Period 1",short_name:"Period 1",size:34,lti_section_id:1,instructors:[{name:"Teacher 1",id:0,isOwner:!0}]},2:{name:"CSD - Period 2",short_name:"Period 2",size:27,lti_section_id:2,instructors:[{name:"Teacher 1",id:0,isOwner:!0}]},3:{name:"CSD - Period 3",short_name:"Period 3",size:32,lti_section_id:3,instructors:[{name:"Teacher 1",id:0,isOwner:!0}]}},changed:{2:{name:"CSD - Period 2",short_name:"Period 2",size:27,lti_section_id:2,instructors:[{name:"Teacher 1",id:0,isOwner:!0}]},3:{name:"CSD - Period 3",short_name:"Period 3",size:32,lti_section_id:3,instructors:[{name:"Teacher 1",id:0,isOwner:!0}]}}}},exports.Error=Template.bind({}),exports.Error.args={isOpen:!0,syncResult:{error:"no_integration"}}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLXVpLXNpbXBsZVNpZ25VcC1sdGktc3luYy1MdGlTZWN0aW9uU3luY0RpYWxvZy1zdG9yeS5iMjYwZDZjMi5pZnJhbWUuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiJzOENBTU8sTUFBTUEsY0FBZ0IsUUFFaEJDLHFCQUF1QixDQUNsQyxjQUFpQixpQkFHTkMsVUFBWSxDQUN2QixZQUFlLGNBQ2YsV0FBYyxhQUNkLE9BQVUsU0FDVixVQUFhLFlBQ2IsTUFBUyxRQUNULGFBQWdCLGdCQUdMQyxZQUFjLENBQ3pCLFVBQWEsWUFDYixVQUFhLFlBQ2IsUUFBVyxVQUNYLE9BQVUsU0FDVixVQUFhLFlBQ2IsZ0JBQW1CLGtCQUNuQixnQkFBbUIsa0JBQ25CLGNBQWlCLGdCQUNqQixtQkFBc0IscUJBQ3RCLHFCQUF3Qix3QkFHYkMsaUJBQW1CLENBQzlCLEtBQVEsT0FDUixRQUFXLFVBQ1gsTUFBUyxRQUNULGlCQUFvQixtQkFDcEIsT0FBVSxTQUNWLE9BQVUsVUFHQ0MsbUJBQXFCLENBQ2hDLElBQ0EsSUFDQSxJQUNBLElBQ0EsSUFDQSxJQUNBLElBQ0EsSUFDQSxJQUNBLElBQ0EsS0FDQSxLQUNBLEtBQ0EsU0FHV0MsYUFBZSxLQUVmQyxrQkFBb0IsQ0FDL0IsSUFBTyxNQUNQLHFDQUF3Qyx1Q0FDeEMsaUJBQW9CLG9CQUdUQyw4QkFBZ0MsQ0FDM0MsU0FDQSxTQUNBLFVBQ0EsVUFDQSxTQUNBLFdBQ0EsdUJBQ0EscUJBQ0EsaUJBQ0Esb0JBQ0EsV0FDQSxpQkFDQSxzQkFDQSxTQUNBLFNBQ0EsU0FDQSxhQUNBLFlBQ0EsYUFDQSxRQUNBLFNBQ0EsYUFDQSxhQUNBLFNBR1dDLDJCQUE2QixDQUN4QyxTQUNBLFNBQ0EsVUFDQSxVQUNBLFNBQ0EsV0FDQSx1QkFDQSxxQkFDQSxpQkFDQSxvQkFDQSxXQUNBLGlCQUNBLHNCQUNBLFNBQ0EsU0FDQSxTQUNBLGFBQ0EsWUFDQSxhQUNBLFFBQ0EsU0FDQSxhQUNBLGFBQ0EsUUFDQSxTQUNBLFVBQ0EsYUFHV0MscUNBQXVDLENBQ2xELFNBQ0EsV0FHV0MsZUFBaUIsQ0FDNUIsZ0JBQW1CLElBR1JDLG9CQUFzQixDQUNqQyxLQUFRLEVBQ1IsTUFBUyxFQUNULE1BQVMsR0FHRUMsOEJBQWdDLENBQzNDLGFBR1dDLDBCQUE0QixDQUN2QyxVQUFhLEVBQ2IsV0FBYyxFQUNkLFFBQVcsRUFDWCxLQUFRLEdBR0dDLHlCQUEyQixDQUN0QyxPQUFVLEVBQ1YsUUFBVyxFQUNYLFFBQVcsRUFDWCxRQUFXLElBQ1gsY0FBaUIsS0FDakIsb0JBQXVCLEtBQ3ZCLGtCQUFxQixNQUdWQyxXQUFhLENBQ3hCLG1CQUFzQiwyQkFDdEIsZUFBa0IsMkJBQ2xCLFFBQVcsdUJBQ1gsMkJBQThCLGdEQUM5Qix1QkFBMEIsc0RBQzFCLG1CQUFzQiwyQkFHWEMsNkJBQStCLENBQzFDLGFBQWdCLElBQ2hCLFdBQWMsSUFDZCxtQkFBc0IsS0FHWEMsZ0JBQWtCLENBQzdCLDJCQUE4QixNQUduQkMsMEJBQTRCLDJCQUU1QkMsb0JBQXNCLENBQ2pDLE1BQVMsUUFDVCxjQUFpQixnQkFDakIsb0JBQXVCLHNCQUN2QixHQUFNLEtBQ04sUUFBVyxXQUdBQyx5QkFBMkIsQ0FDdEMsTUFBUyxRQUNULGNBQWlCLGdCQUNqQixvQkFBdUIsc0JBQ3ZCLEdBQU0sS0FDTixRQUFXLFdBR0FDLGFBQWUsQ0FDMUIsWUFBZSxjQUNmLFdBQWMsYUFDZCxhQUFnQixnQkFHTEMsc0JBQXdCLENBQ25DLE9BQVUsU0FDVixXQUFjLGFBQ2QsU0FBWSxZQUdEQyx5QkFBMkIsQ0FDdEMsMEJBQTZCLElBR2xCQyxTQUFXLENBQ3RCLHNCQUF5Qix3SkFDekIseUJBQTRCLDhIQUM1Qiw2QkFBZ0Msd0dBQ2hDLDZCQUFnQyw4R0FDaEMsd0JBQTJCLDhEQUMzQixzQkFBeUIsMkdBR2RDLFVBQVksQ0FDdkIsUUFBVyxVQUNYLFFBQVcsVSw2a0JDaE9iLGtGQUVBLDJIQUVBLGdCQUFlLENBQ2JDLFVBQVcsZ0NBT2IsSUFBTUMsU0FBaUQsU0FBQUMsTUFBUSxPQUM3RCw4QkFBQywrQkFBb0IsWUFBS0EsTUFEbUMsRUFRbEQsUUFBQUMsZUFBaUJGLFNBQVNHLEtBQUssQ0FBQyxHQUM3QyxRQUFBRCxlQUFBLEtBQXNCLENBQ3BCRSxRQUFRLEVBQ1JDLGdDQUFnQyxFQUNoQ0MsV0FBWSxDQUNWQyxJQUFLLENBQ0gsRUFBRyxDQUNEQyxLQUFNLGlCQUNOQyxXQUFZLFdBQ1pDLEtBQU0sR0FDTkMsZUFBZ0IsRUFDaEJDLFlBQWEsQ0FDWCxDQUNFSixLQUFNLFlBQ05LLEdBQUksRUFDSkMsU0FBUyxLQUlmLEVBQUcsQ0FDRE4sS0FBTSxpQkFDTkMsV0FBWSxXQUNaQyxLQUFNLEdBQ05DLGVBQWdCLEVBQ2hCQyxZQUFhLENBQ1gsQ0FDRUosS0FBTSxZQUNOSyxHQUFJLEVBQ0pDLFNBQVMsS0FJZixFQUFHLENBQ0ROLEtBQU0saUJBQ05DLFdBQVksV0FDWkMsS0FBTSxHQUNOQyxlQUFnQixFQUNoQkMsWUFBYSxDQUNYLENBQ0VKLEtBQU0sWUFDTkssR0FBSSxFQUNKQyxTQUFTLE1BS2pCQyxRQUFTLENBQ1AsRUFBRyxDQUNEUCxLQUFNLGlCQUNOQyxXQUFZLFdBQ1pDLEtBQU0sR0FDTkMsZUFBZ0IsRUFDaEJDLFlBQWEsQ0FDWCxDQUNFSixLQUFNLFlBQ05LLEdBQUksRUFDSkMsU0FBUyxLQUlmLEVBQUcsQ0FDRE4sS0FBTSxpQkFDTkMsV0FBWSxXQUNaQyxLQUFNLEdBQ05DLGVBQWdCLEVBQ2hCQyxZQUFhLENBQ1gsQ0FDRUosS0FBTSxZQUNOSyxHQUFJLEVBQ0pDLFNBQVMsUUFPUixRQUFBRSxNQUFRaEIsU0FBU0csS0FBSyxDQUFDLEdBQ3BDLFFBQUFhLE1BQUEsS0FBYSxDQUNYWixRQUFRLEVBQ1JFLFdBQVksQ0FDVlcsTUFBTyxrQiIsInNvdXJjZXMiOlsid2VicGFjazovL2Jsb2NrbHktbW9vYy8uL2dlbmVyYXRlZC1zY3JpcHRzL3NoYXJlZENvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9ibG9ja2x5LW1vb2MvLi9zcmMvbGliL3VpL3NpbXBsZVNpZ25VcC9sdGkvc3luYy9MdGlTZWN0aW9uU3luY0RpYWxvZy5zdG9yeS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgKi9cblxuLy8gVGhpcyBpcyBhIGdlbmVyYXRlZCBmaWxlIGFuZCBTSE9VTEQgTk9UIEJFIEVESVRFRCBNQU5VQUxMWSEhXG4vLyBDb250ZW50cyBhcmUgZ2VuZXJhdGVkIGFzIHBhcnQgb2YgZ3J1bnQgYnVpbGRcbi8vIFNvdXJjZSBvZiB0cnV0aCBpcyBsaWIvY2RvL3NoYXJlZF9jb25zdGFudHMucmIgYW5kIGZpbGVzIGluIGxpYi9jZG8vc2hhcmVkX2NvbnN0YW50cy9cblxuZXhwb3J0IGNvbnN0IERlZmF1bHRMb2NhbGUgPSAnZW4tVVMnO1xuXG5leHBvcnQgY29uc3QgQXJ0aXN0QXV0b3J1bk9wdGlvbnMgPSB7XG4gIFwiZnVsbF9hdXRvX3J1blwiOiBcIkZVTExfQVVUT19SVU5cIlxufTtcblxuZXhwb3J0IGNvbnN0IExldmVsS2luZCA9IHtcbiAgXCJwZWVyX3Jldmlld1wiOiBcInBlZXJfcmV2aWV3XCIsXG4gIFwiYXNzZXNzbWVudFwiOiBcImFzc2Vzc21lbnRcIixcbiAgXCJwdXp6bGVcIjogXCJwdXp6bGVcIixcbiAgXCJ1bnBsdWdnZWRcIjogXCJ1bnBsdWdnZWRcIixcbiAgXCJsZXZlbFwiOiBcImxldmVsXCIsXG4gIFwic3RhZ2VfZXh0cmFzXCI6IFwic3RhZ2VfZXh0cmFzXCJcbn07XG5cbmV4cG9ydCBjb25zdCBMZXZlbFN0YXR1cyA9IHtcbiAgXCJub3RfdHJpZWRcIjogXCJub3RfdHJpZWRcIixcbiAgXCJzdWJtaXR0ZWRcIjogXCJzdWJtaXR0ZWRcIixcbiAgXCJwZXJmZWN0XCI6IFwicGVyZmVjdFwiLFxuICBcInBhc3NlZFwiOiBcInBhc3NlZFwiLFxuICBcImF0dGVtcHRlZFwiOiBcImF0dGVtcHRlZFwiLFxuICBcInJldmlld19hY2NlcHRlZFwiOiBcInJldmlld19hY2NlcHRlZFwiLFxuICBcInJldmlld19yZWplY3RlZFwiOiBcInJldmlld19yZWplY3RlZFwiLFxuICBcImRvdHNfZGlzYWJsZWRcIjogXCJkb3RzX2Rpc2FibGVkXCIsXG4gIFwiZnJlZV9wbGF5X2NvbXBsZXRlXCI6IFwiZnJlZV9wbGF5X2NvbXBsZXRlXCIsXG4gIFwiY29tcGxldGVkX2Fzc2Vzc21lbnRcIjogXCJjb21wbGV0ZWRfYXNzZXNzbWVudFwiXG59O1xuXG5leHBvcnQgY29uc3QgU2VjdGlvbkxvZ2luVHlwZSA9IHtcbiAgXCJ3b3JkXCI6IFwid29yZFwiLFxuICBcInBpY3R1cmVcIjogXCJwaWN0dXJlXCIsXG4gIFwiZW1haWxcIjogXCJlbWFpbFwiLFxuICBcImdvb2dsZV9jbGFzc3Jvb21cIjogXCJnb29nbGVfY2xhc3Nyb29tXCIsXG4gIFwiY2xldmVyXCI6IFwiY2xldmVyXCIsXG4gIFwibHRpX3YxXCI6IFwibHRpX3YxXCJcbn07XG5cbmV4cG9ydCBjb25zdCBTdHVkZW50R3JhZGVMZXZlbHMgPSBbXG4gIFwiS1wiLFxuICBcIjFcIixcbiAgXCIyXCIsXG4gIFwiM1wiLFxuICBcIjRcIixcbiAgXCI1XCIsXG4gIFwiNlwiLFxuICBcIjdcIixcbiAgXCI4XCIsXG4gIFwiOVwiLFxuICBcIjEwXCIsXG4gIFwiMTFcIixcbiAgXCIxMlwiLFxuICBcIk90aGVyXCJcbl07XG5cbmV4cG9ydCBjb25zdCBQbEdyYWRlVmFsdWUgPSAncGwnO1xuXG5leHBvcnQgY29uc3QgUG9zdE1pbGVzdG9uZU1vZGUgPSB7XG4gIFwiYWxsXCI6IFwiYWxsXCIsXG4gIFwic3VjY2Vzc2Z1bF9ydW5zX2FuZF9maW5hbF9sZXZlbF9vbmx5XCI6IFwic3VjY2Vzc2Z1bF9ydW5zX2FuZF9maW5hbF9sZXZlbF9vbmx5XCIsXG4gIFwiZmluYWxfbGV2ZWxfb25seVwiOiBcImZpbmFsX2xldmVsX29ubHlcIlxufTtcblxuZXhwb3J0IGNvbnN0IEFsd2F5c1B1Ymxpc2hhYmxlUHJvamVjdFR5cGVzID0gW1xuICBcImFydGlzdFwiLFxuICBcImZyb3plblwiLFxuICBcInBsYXlsYWJcIixcbiAgXCJndW1iYWxsXCIsXG4gIFwiaWNlYWdlXCIsXG4gIFwiaW5maW5pdHlcIixcbiAgXCJtaW5lY3JhZnRfYWR2ZW50dXJlclwiLFxuICBcIm1pbmVjcmFmdF9kZXNpZ25lclwiLFxuICBcIm1pbmVjcmFmdF9oZXJvXCIsXG4gIFwibWluZWNyYWZ0X2FxdWF0aWNcIixcbiAgXCJzdGFyd2Fyc1wiLFxuICBcInN0YXJ3YXJzYmxvY2tzXCIsXG4gIFwic3RhcndhcnNibG9ja3NfaG91clwiLFxuICBcImZsYXBweVwiLFxuICBcImJvdW5jZVwiLFxuICBcInNwb3J0c1wiLFxuICBcImJhc2tldGJhbGxcIixcbiAgXCJhcnRpc3RfazFcIixcbiAgXCJwbGF5bGFiX2sxXCIsXG4gIFwiZGFuY2VcIixcbiAgXCJwb2V0cnlcIixcbiAgXCJwb2V0cnlfaG9jXCIsXG4gIFwidGhlYmFkZ3V5c1wiLFxuICBcIm11c2ljXCJcbl07XG5cbmV4cG9ydCBjb25zdCBBbGxQdWJsaXNoYWJsZVByb2plY3RUeXBlcyA9IFtcbiAgXCJhcnRpc3RcIixcbiAgXCJmcm96ZW5cIixcbiAgXCJwbGF5bGFiXCIsXG4gIFwiZ3VtYmFsbFwiLFxuICBcImljZWFnZVwiLFxuICBcImluZmluaXR5XCIsXG4gIFwibWluZWNyYWZ0X2FkdmVudHVyZXJcIixcbiAgXCJtaW5lY3JhZnRfZGVzaWduZXJcIixcbiAgXCJtaW5lY3JhZnRfaGVyb1wiLFxuICBcIm1pbmVjcmFmdF9hcXVhdGljXCIsXG4gIFwic3RhcndhcnNcIixcbiAgXCJzdGFyd2Fyc2Jsb2Nrc1wiLFxuICBcInN0YXJ3YXJzYmxvY2tzX2hvdXJcIixcbiAgXCJmbGFwcHlcIixcbiAgXCJib3VuY2VcIixcbiAgXCJzcG9ydHNcIixcbiAgXCJiYXNrZXRiYWxsXCIsXG4gIFwiYXJ0aXN0X2sxXCIsXG4gIFwicGxheWxhYl9rMVwiLFxuICBcImRhbmNlXCIsXG4gIFwicG9ldHJ5XCIsXG4gIFwicG9ldHJ5X2hvY1wiLFxuICBcInRoZWJhZGd1eXNcIixcbiAgXCJtdXNpY1wiLFxuICBcImFwcGxhYlwiLFxuICBcImdhbWVsYWJcIixcbiAgXCJzcHJpdGVsYWJcIlxuXTtcblxuZXhwb3J0IGNvbnN0IENvbmRpdGlvbmFsbHlQdWJsaXNoYWJsZVByb2plY3RUeXBlcyA9IFtcbiAgXCJhcHBsYWJcIixcbiAgXCJnYW1lbGFiXCJcbl07XG5cbmV4cG9ydCBjb25zdCBBYnVzZUNvbnN0YW50cyA9IHtcbiAgXCJBQlVTRV9USFJFU0hPTERcIjogMTVcbn07XG5cbmV4cG9ydCBjb25zdCBFcnJvclNldmVyaXR5TGV2ZWxzID0ge1xuICBcIldBUk5cIjogMixcbiAgXCJFUlJPUlwiOiAzLFxuICBcIkZBVEFMXCI6IDRcbn07XG5cbmV4cG9ydCBjb25zdCBSZXN0cmljdGVkUHVibGlzaFByb2plY3RUeXBlcyA9IFtcbiAgXCJzcHJpdGVsYWJcIlxuXTtcblxuZXhwb3J0IGNvbnN0IFJ1YnJpY1VuZGVyc3RhbmRpbmdMZXZlbHMgPSB7XG4gIFwiRVhURU5TSVZFXCI6IDMsXG4gIFwiQ09OVklOQ0lOR1wiOiAyLFxuICBcIkxJTUlURURcIjogMSxcbiAgXCJOT05FXCI6IDBcbn07XG5cbmV4cG9ydCBjb25zdCBSdWJyaWNBaUV2YWx1YXRpb25TdGF0dXMgPSB7XG4gIFwiUVVFVUVEXCI6IDAsXG4gIFwiUlVOTklOR1wiOiAxLFxuICBcIlNVQ0NFU1NcIjogMixcbiAgXCJGQUlMVVJFXCI6IDEwMDAsXG4gIFwiUElJX1ZJT0xBVElPTlwiOiAxMDAxLFxuICBcIlBST0ZBTklUWV9WSU9MQVRJT05cIjogMTAwMixcbiAgXCJSRVFVRVNUX1RPT19MQVJHRVwiOiAxMDAzXG59O1xuXG5leHBvcnQgY29uc3QgRW1haWxMaW5rcyA9IHtcbiAgXCJQUklWQUNZX1BPTElDWV9VUkxcIjogXCJodHRwczovL2NvZGUub3JnL3ByaXZhY3lcIixcbiAgXCJDT05UQUNUX1VTX1VSTFwiOiBcImh0dHBzOi8vY29kZS5vcmcvY29udGFjdFwiLFxuICBcIlRPU19VUkxcIjogXCJodHRwczovL2NvZGUub3JnL3Rvc1wiLFxuICBcIlNUVURFTlRfUFJJVkFDWV9QTEVER0VfVVJMXCI6IFwiaHR0cHM6Ly9zdHVkZW50cHJpdmFjeXBsZWRnZS5vcmcvc2lnbmF0b3JpZXMvXCIsXG4gIFwiQ09NTU9OX1NFTlNFX01FRElBX1VSTFwiOiBcImh0dHBzOi8vcHJpdmFjeS5jb21tb25zZW5zZS5vcmcvZXZhbHVhdGlvbi9jb2RlLm9yZ1wiLFxuICBcIkNET19TVVBQT1JUX01BSUxUT1wiOiBcIm1haWx0bzpzdXBwb3J0QGNvZGUub3JnXCJcbn07XG5cbmV4cG9ydCBjb25zdCBDaGlsZEFjY291bnRDb21wbGlhbmNlU3RhdGVzID0ge1xuICBcIkdSQUNFX1BFUklPRFwiOiBcInBcIixcbiAgXCJMT0NLRURfT1VUXCI6IFwibFwiLFxuICBcIlBFUk1JU1NJT05fR1JBTlRFRFwiOiBcImdcIlxufTtcblxuZXhwb3J0IGNvbnN0IENlbnN1c0NvbnN0YW50cyA9IHtcbiAgXCJDVVJSRU5UX0NFTlNVU19TQ0hPT0xfWUVBUlwiOiAyMDIzXG59O1xuXG5leHBvcnQgY29uc3QgRGFuY2VTb25nTWFuaWZlc3RGaWxlbmFtZSA9ICdzb25nTWFuaWZlc3QyMDI0X3YyLmpzb24nO1xuXG5leHBvcnQgY29uc3QgQWlJbnRlcmFjdGlvblN0YXR1cyA9IHtcbiAgXCJFUlJPUlwiOiBcImVycm9yXCIsXG4gIFwiUElJX1ZJT0xBVElPTlwiOiBcInBpaV92aW9sYXRpb25cIixcbiAgXCJQUk9GQU5JVFlfVklPTEFUSU9OXCI6IFwicHJvZmFuaXR5X3Zpb2xhdGlvblwiLFxuICBcIk9LXCI6IFwib2tcIixcbiAgXCJVTktOT1dOXCI6IFwidW5rbm93blwiXG59O1xuXG5leHBvcnQgY29uc3QgQWlUdXRvckludGVyYWN0aW9uU3RhdHVzID0ge1xuICBcIkVSUk9SXCI6IFwiZXJyb3JcIixcbiAgXCJQSUlfVklPTEFUSU9OXCI6IFwicGlpX3Zpb2xhdGlvblwiLFxuICBcIlBST0ZBTklUWV9WSU9MQVRJT05cIjogXCJwcm9mYW5pdHlfdmlvbGF0aW9uXCIsXG4gIFwiT0tcIjogXCJva1wiLFxuICBcIlVOS05PV05cIjogXCJ1bmtub3duXCJcbn07XG5cbmV4cG9ydCBjb25zdCBBaVR1dG9yVHlwZXMgPSB7XG4gIFwiQ09NUElMQVRJT05cIjogXCJjb21waWxhdGlvblwiLFxuICBcIlZBTElEQVRJT05cIjogXCJ2YWxpZGF0aW9uXCIsXG4gIFwiR0VORVJBTF9DSEFUXCI6IFwiZ2VuZXJhbF9jaGF0XCJcbn07XG5cbmV4cG9ydCBjb25zdCBGZWF0dXJlZFByb2plY3RTdGF0dXMgPSB7XG4gIFwiYWN0aXZlXCI6IFwiYWN0aXZlXCIsXG4gIFwiYm9va21hcmtlZFwiOiBcImJvb2ttYXJrZWRcIixcbiAgXCJhcmNoaXZlZFwiOiBcImFyY2hpdmVkXCJcbn07XG5cbmV4cG9ydCBjb25zdCBGZWF0dXJlZFByb2plY3RDb25zdGFudHMgPSB7XG4gIFwiTUFYX1JFUVVFU1RTX1BFUl9DQVRFR09SWVwiOiAxNVxufTtcblxuZXhwb3J0IGNvbnN0IExtc0xpbmtzID0ge1xuICBcIklOVEVHUkFUSU9OX0dVSURFX1VSTFwiOiBcImh0dHBzOi8vc3VwcG9ydC5jb2RlLm9yZy9oYy9lbi11cy9hcnRpY2xlcy8yMzEyMDAxNDQ1OTQwNS1MZWFybmluZy1NYW5hZ2VtZW50LVN5c3RlbS1MTVMtYW5kLVNpbmdsZS1TaWduLU9uLVNTTy1JbnRlZ3JhdGlvbnMtYW5kLVN1cHBvcnQtZm9yLUNvZGUtb3JnXCIsXG4gIFwiSU5TVEFMTF9JTlNUUlVDVElPTlNfVVJMXCI6IFwiaHR0cHM6Ly9zdXBwb3J0LmNvZGUub3JnL2hjL2VuLXVzL2FydGljbGVzLzIzNjIxOTA3NTMzOTY1LUluc3RhbGwtQ29kZS1vcmctSW50ZWdyYXRpb25zLWZvci15b3VyLUxlYXJuaW5nLU1hbmFnZW1lbnQtU3lzdGVtXCIsXG4gIFwiSU5TVEFMTF9HVUlERV9GT1JfQ0FOVkFTX1VSTFwiOiBcImh0dHBzOi8vc3VwcG9ydC5jb2RlLm9yZy9oYy9lbi11cy9hcnRpY2xlcy8yMzEyMzI3Mzc4MzQzNy1JbnN0YWxsLXRoZS1Db2RlLW9yZy1JbnRlZ3JhdGlvbi1mb3ItQ2FudmFzXCIsXG4gIFwiUk9TVEVSX1NZTkNfSU5TVFJVQ1RJT05TX1VSTFwiOiBcImh0dHBzOi8vc3VwcG9ydC5jb2RlLm9yZy9oYy9lbi11cy9hcnRpY2xlcy8yMzYyMTk3ODY1NDYwNS1TeW5jLVJvc3RlcnMtd2l0aC15b3VyLUxlYXJuaW5nLU1hbmFnZW1lbnQtU3lzdGVtXCIsXG4gIFwiQURESVRJT05BTF9GRUVEQkFDS19VUkxcIjogXCJodHRwczovL3N0dWRpby5jb2RlLm9yZy9mb3JtL2xtc19pbnRlZ3JhdGlvbl9tb2RhbF9mZWVkYmFja1wiLFxuICBcIlNVUFBPUlRFRF9NRVRIT0RTX1VSTFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9jb2RlLWRvdC1vcmcvY29kZS1kb3Qtb3JnL2Jsb2Ivc3RhZ2luZy9kb2NzL2x0aS1pbnRlZ3JhdGlvbi5tZCNvcHRpb24tMi1tYW51YWwtZW50cnlcIlxufTtcblxuZXhwb3J0IGNvbnN0IFVzZXJUeXBlcyA9IHtcbiAgXCJTVFVERU5UXCI6IFwic3R1ZGVudFwiLFxuICBcIlRFQUNIRVJcIjogXCJ0ZWFjaGVyXCJcbn07XG4iLCJpbXBvcnQge1N0b3J5Rm59IGZyb20gJ0BzdG9yeWJvb2svcmVhY3QnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IEx0aVNlY3Rpb25TeW5jRGlhbG9nIGZyb20gJ0BjZG8vYXBwcy9saWIvdWkvc2ltcGxlU2lnblVwL2x0aS9zeW5jL0x0aVNlY3Rpb25TeW5jRGlhbG9nJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wb25lbnQ6IEx0aVNlY3Rpb25TeW5jRGlhbG9nLFxufTtcblxuLy9cbi8vIFRFTVBMQVRFXG4vL1xuXG5jb25zdCBUZW1wbGF0ZTogU3RvcnlGbjx0eXBlb2YgTHRpU2VjdGlvblN5bmNEaWFsb2c+ID0gYXJncyA9PiAoXG4gIDxMdGlTZWN0aW9uU3luY0RpYWxvZyB7Li4uYXJnc30gLz5cbik7XG5cbi8vXG4vLyBTVE9SSUVTXG4vL1xuXG5leHBvcnQgY29uc3QgU3VjY2Vzc2Z1bFN5bmMgPSBUZW1wbGF0ZS5iaW5kKHt9KTtcblN1Y2Nlc3NmdWxTeW5jLmFyZ3MgPSB7XG4gIGlzT3BlbjogdHJ1ZSxcbiAgZGlzYWJsZVJvc3RlclN5bmNCdXR0b25FbmFibGVkOiB0cnVlLFxuICBzeW5jUmVzdWx0OiB7XG4gICAgYWxsOiB7XG4gICAgICAxOiB7XG4gICAgICAgIG5hbWU6ICdDU0QgLSBQZXJpb2QgMScsXG4gICAgICAgIHNob3J0X25hbWU6ICdQZXJpb2QgMScsXG4gICAgICAgIHNpemU6IDM0LFxuICAgICAgICBsdGlfc2VjdGlvbl9pZDogMSxcbiAgICAgICAgaW5zdHJ1Y3RvcnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnVGVhY2hlciAxJyxcbiAgICAgICAgICAgIGlkOiAwLFxuICAgICAgICAgICAgaXNPd25lcjogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIDI6IHtcbiAgICAgICAgbmFtZTogJ0NTRCAtIFBlcmlvZCAyJyxcbiAgICAgICAgc2hvcnRfbmFtZTogJ1BlcmlvZCAyJyxcbiAgICAgICAgc2l6ZTogMjcsXG4gICAgICAgIGx0aV9zZWN0aW9uX2lkOiAyLFxuICAgICAgICBpbnN0cnVjdG9yczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdUZWFjaGVyIDEnLFxuICAgICAgICAgICAgaWQ6IDAsXG4gICAgICAgICAgICBpc093bmVyOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAgMzoge1xuICAgICAgICBuYW1lOiAnQ1NEIC0gUGVyaW9kIDMnLFxuICAgICAgICBzaG9ydF9uYW1lOiAnUGVyaW9kIDMnLFxuICAgICAgICBzaXplOiAzMixcbiAgICAgICAgbHRpX3NlY3Rpb25faWQ6IDMsXG4gICAgICAgIGluc3RydWN0b3JzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ1RlYWNoZXIgMScsXG4gICAgICAgICAgICBpZDogMCxcbiAgICAgICAgICAgIGlzT3duZXI6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBjaGFuZ2VkOiB7XG4gICAgICAyOiB7XG4gICAgICAgIG5hbWU6ICdDU0QgLSBQZXJpb2QgMicsXG4gICAgICAgIHNob3J0X25hbWU6ICdQZXJpb2QgMicsXG4gICAgICAgIHNpemU6IDI3LFxuICAgICAgICBsdGlfc2VjdGlvbl9pZDogMixcbiAgICAgICAgaW5zdHJ1Y3RvcnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnVGVhY2hlciAxJyxcbiAgICAgICAgICAgIGlkOiAwLFxuICAgICAgICAgICAgaXNPd25lcjogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIDM6IHtcbiAgICAgICAgbmFtZTogJ0NTRCAtIFBlcmlvZCAzJyxcbiAgICAgICAgc2hvcnRfbmFtZTogJ1BlcmlvZCAzJyxcbiAgICAgICAgc2l6ZTogMzIsXG4gICAgICAgIGx0aV9zZWN0aW9uX2lkOiAzLFxuICAgICAgICBpbnN0cnVjdG9yczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdUZWFjaGVyIDEnLFxuICAgICAgICAgICAgaWQ6IDAsXG4gICAgICAgICAgICBpc093bmVyOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59O1xuZXhwb3J0IGNvbnN0IEVycm9yID0gVGVtcGxhdGUuYmluZCh7fSk7XG5FcnJvci5hcmdzID0ge1xuICBpc09wZW46IHRydWUsXG4gIHN5bmNSZXN1bHQ6IHtcbiAgICBlcnJvcjogJ25vX2ludGVncmF0aW9uJyxcbiAgfSxcbn07XG4iXSwibmFtZXMiOlsiRGVmYXVsdExvY2FsZSIsIkFydGlzdEF1dG9ydW5PcHRpb25zIiwiTGV2ZWxLaW5kIiwiTGV2ZWxTdGF0dXMiLCJTZWN0aW9uTG9naW5UeXBlIiwiU3R1ZGVudEdyYWRlTGV2ZWxzIiwiUGxHcmFkZVZhbHVlIiwiUG9zdE1pbGVzdG9uZU1vZGUiLCJBbHdheXNQdWJsaXNoYWJsZVByb2plY3RUeXBlcyIsIkFsbFB1Ymxpc2hhYmxlUHJvamVjdFR5cGVzIiwiQ29uZGl0aW9uYWxseVB1Ymxpc2hhYmxlUHJvamVjdFR5cGVzIiwiQWJ1c2VDb25zdGFudHMiLCJFcnJvclNldmVyaXR5TGV2ZWxzIiwiUmVzdHJpY3RlZFB1Ymxpc2hQcm9qZWN0VHlwZXMiLCJSdWJyaWNVbmRlcnN0YW5kaW5nTGV2ZWxzIiwiUnVicmljQWlFdmFsdWF0aW9uU3RhdHVzIiwiRW1haWxMaW5rcyIsIkNoaWxkQWNjb3VudENvbXBsaWFuY2VTdGF0ZXMiLCJDZW5zdXNDb25zdGFudHMiLCJEYW5jZVNvbmdNYW5pZmVzdEZpbGVuYW1lIiwiQWlJbnRlcmFjdGlvblN0YXR1cyIsIkFpVHV0b3JJbnRlcmFjdGlvblN0YXR1cyIsIkFpVHV0b3JUeXBlcyIsIkZlYXR1cmVkUHJvamVjdFN0YXR1cyIsIkZlYXR1cmVkUHJvamVjdENvbnN0YW50cyIsIkxtc0xpbmtzIiwiVXNlclR5cGVzIiwiY29tcG9uZW50IiwiVGVtcGxhdGUiLCJhcmdzIiwiU3VjY2Vzc2Z1bFN5bmMiLCJiaW5kIiwiaXNPcGVuIiwiZGlzYWJsZVJvc3RlclN5bmNCdXR0b25FbmFibGVkIiwic3luY1Jlc3VsdCIsImFsbCIsIm5hbWUiLCJzaG9ydF9uYW1lIiwic2l6ZSIsImx0aV9zZWN0aW9uX2lkIiwiaW5zdHJ1Y3RvcnMiLCJpZCIsImlzT3duZXIiLCJjaGFuZ2VkIiwiRXJyb3IiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=