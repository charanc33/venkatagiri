#!/usr/bin/env groovy
node ('mesos') {
    def branch = "${env.BRANCH_NAME}"
    def nodeHome = tool 'nodejs-8.11.2'
    def cfHome = tool 'cf';
    env.PATH = "${nodeHome}/bin:${env.PATH}"

    stage ('Checkout') {
        checkout scm
        echo "BRANCH: " + branch
    }

    stage("Build & Test") {
        sh 'apt-get install bzip2 && npm install && ng serve'
    }

    if(branch == 'master') {

        stage('Deploy'){
            withCredentials() {
                sh 'cf login -u jayachandra.chavali@gmail.com -p Amma1123$ -a console.run.pivotal.io -o J-Development -s production'
            }

        }
    }
