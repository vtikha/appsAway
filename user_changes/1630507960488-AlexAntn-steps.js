//AlexAntn
//
//&<h3>Added all the steps for the app:<ins>test_norobot</ins></h3>
db.steps.insert({"app_id": "27", "step": "1", "title": "Description", "summary": "test_norobot", "requirements": [], "projects": [], "media_content": []}) 
db.steps.insert({ app_id: "27", step: "2", title:"Get your cluster ready",summary:"The objective of this procedure is to get a cluster ready for deployment of a robot application. Usually a robot cluster is composed by one or more workstations plus a robot, all of them interconnected on a network. The deployment of the application is based on <a href='https://www.docker.com/'>Docker</a> technology and use an orchestrator, a combination of <a href='https://docs.docker.com/engine/swarm/'>Docker Swarm</a> and <a href='https://docs.docker.com/compose/'>Docker Compose</a> to manage modules belonging to the application without any user action.", deployment_architecture:"https://storage.googleapis.com/robot-bazaar-files/apps/demoRedBall/architecture.png", docker_installation_procedure:"The docker installation on your machine or cluster of machines is done in an automated way using <b>Ansible</b>. Ansible is the simplest way to <b>automate applications</b> and IT infrastructures. <b>Application Deployment + Configuration Management + Continuous Delivery</b>. The only requirement is that the console machine (your main machine), which will act as a <b>manager</b>, must have Ansible installed.\n\nHere is how to install <b>Ansible</b> on the various platforms:<h4>Ubuntu/Linux:</h4><ol><li><code class='inline'>sudo apt-add-repository -y ppa:ansible/ansible</code></li><li><code class='inline'>sudo apt-get update</code></li><li><code class='inline'>sudo apt-get install -y ansible</code></li><li><code class='inline'>sudo apt-get install openssh-server</code></li><li><code class='inline'>sudo apt-get install net-tools</code></li></ol><h4>MacOS (not supported by all applications):</h4><ol><li><code class='inline'>brew install ansible</code></li><li>Install docker Desktop from this <a href='https://hub.docker.com/editions/community/docker-ce-desktop-mac/'>link</a></li><li><code class='inline'>brew install ansible</code></li><li><code class='inline'>ruby -e '$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)' < /dev/null 2> /dev/null ; brew install caskroom/cask/brew-cask 2> /dev/null</code></li><li><code class='inline'>brew cask install xquartz</code></li><li>Once installed, logout and log back in, then add an option to Xquartz: <code class='inline'>open -a Xquartz</code></li><li>Now open up the preferences from the top menu and go to the last tab ‘security’. There we need to make sure the “allow connections from network clients” is checked “on”.</li></ol>"}) 
db.steps.insert({ app_id: "27", step: "3", title:"Define your cluster",summary:"In order for the deployment to work properly, we require you to fill in some basic but important information regarding your robot and your cluster.\nWe will need information about: <ul><li>Your robot's name: <code class='inline'>robotName</code></li><li>Your repository version preference: <code class='inline'>repository</code></li><li>Your cluster nodes and ip preference: <code class='inline'>nodeName</code> and <code class='inline'>nodeIP</code></li></ul>Please click on the setup button below in order to proceed"}) 
db.steps.insert({ app_id: "27", step: "4", title:"Congratulations!",content_without_robot:"You have <b>correctly</b> defined the application for your cluster!\nYou just need to <b>download the script</b> on your console and run the following command in a terminal (you can use the copy cmd button for simplicity).\n<code>mkdir -p ~/teamcode/ && mv ~/Downloads/test_norobot_1_setup.txt ~/teamcode/test_norobot_1_setup.sh && cd ~/teamcode/ && chmod +x test_norobot_1_setup.sh && ./test_norobot_1_setup.sh</code>\n\n<b>Enjoy</b> the application!</p>",cmd:"mkdir -p ~/teamcode/ && mv ~/Downloads/test_norobot_1_setup.txt ~/teamcode/test_norobot_1_setup.sh && cd ~/teamcode/ && chmod +x test_norobot_1_setup.sh && ./test_norobot_1_setup.sh"})