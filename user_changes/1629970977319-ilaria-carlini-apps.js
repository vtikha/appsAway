//ilaria-carlini
//
//&<h3>Addition of a new app:<ins>My new application</ins></h3><ul><li>id: 27</li><li>title: My new application</li><li>description: This is a test for adding application</li><li>category: Application</li><li>complexity: 0</li><li>updated: Aug 2021</li><li>platform: [iCub]</li><li>dependencies: [icub-head]</li><li>version: [true,false]</li><li>format: yml</li><li>laboratories: []</li><li>summary: This is a test for adding application using peter-evans GitHub action</li><li>requirements: [Ssh keyless access on machines allows to run smoothly without inserting password at every command,Coffee/tea,git (version control system)]</li><li>projects: []</li><li>with_robot: {folder_name:my-new-application,images:[icubteamcode/supervise-calib,icubteamcode/supervise-calib,icubteamcode/superbuild-icubhead],main_img_name:,gui_img_name:,head_img_name:}</li></ul>
db.apps.insert({id: "27", title: "My new application", description: "This is a test for adding application", category: "Application", complexity: "0", updated: "Aug 2021", platform: ["iCub"], dependencies: ["icub-head"], version: [true,false], format: "yml", laboratories: [], summary: "This is a test for adding application using peter-evans GitHub action", requirements: ["Ssh keyless access on machines allows to run smoothly without inserting password at every command","Coffee/tea","git (version control system)"], projects: [], with_robot: {"folder_name":"my-new-application","images":["icubteamcode/supervise-calib","icubteamcode/supervise-calib","icubteamcode/superbuild-icubhead"],"main_img_name":"","gui_img_name":"","head_img_name":""}})