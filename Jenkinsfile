#!groovy

node {
    stage('Checkout') {
        //disable to recycle workspace data to save time/bandwidth
        deleteDir()
        checkout scm

        //enable for commit id in build number
        //env.git_commit_id = sh returnStdout: true, script: 'git rev-parse HEAD'
        //env.git_commit_id_short = env.git_commit_id.take(7)
        //currentBuild.displayName = "#${currentBuild.number}-${env.git_commit_id_short}"
    }

    stage('Build') {
        withEnv(["NPM_CONFIG_LOGLEVEL=warn"]) {
            sh 'npm install && ng build'
        }
    }

    stage('Deploy') {
        milestone()
        echo "Deploying..."
    }
}
