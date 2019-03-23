cordova.define("cordova.plugin.serviceOnBoardingSDK.serviceOnBoardingSDK", function(require, exports, module) {
//var exec = require('cordova/exec');

function ServiceOnBoardingSDK(){}


ServiceOnBoardingSDK.prototype.initialize = function(serverURL, serverAPIKEY, success, error) {
    cordova.exec(success, error, "serviceOnBoardingSDK", "initialize", [serverURL, serverAPIKEY]);
};

ServiceOnBoardingSDK.prototype.registerFaceService = function(selfieBodyList, userIdentifier, applicationVersion, operativeSystem, operativeSystemVersion, deviceManufacture, deviceName, success, error) {
    cordova.exec(success, error, "serviceOnBoardingSDK", "registerFaceService", [selfieBodyList, userIdentifier, applicationVersion, operativeSystem, operativeSystemVersion, deviceManufacture, deviceName]);
};

ServiceOnBoardingSDK.prototype.loginFaceService = function(selfieBodyList, userIdentifier, applicationVersion, operativeSystem, operativeSystemVersion, deviceManufacture, deviceName, success, error) {
    cordova.exec(success, error, "serviceOnBoardingSDK", "loginFaceService", [selfieBodyList, userIdentifier, applicationVersion, operativeSystem, operativeSystemVersion, deviceManufacture, deviceName]);
};

ServiceOnBoardingSDK.prototype.newOperationOnboardingService = function(userIdentifier, ipAddress, deviceHash, rooted, applicationVersion, operativeSystem, operativeSystemVersion, deviceManufacture, deviceName, success, error) {
    cordova.exec(success, error, "serviceOnBoardingSDK", "newOperationOnboardingService", [userIdentifier, ipAddress, deviceHash, rooted, applicationVersion, operativeSystem, operativeSystemVersion, deviceManufacture, deviceName]);
};

ServiceOnBoardingSDK.prototype.endOperationOnboardingService = function(userIdentifier, operationId, success, error) {
    cordova.exec(success, error, "serviceOnBoardingSDK", "endOperationOnboardingService", [userIdentifier, operationId]);
};

ServiceOnBoardingSDK.prototype.cancelOperationOnboardingService = function(userIdentifier, operationId, success, error) {
    cordova.exec(success, error, "serviceOnBoardingSDK", "cancelOperationOnboardingService", [userIdentifier, operationId]);
};

ServiceOnBoardingSDK.prototype.statusOperationOnboardingService = function(userIdentifier, operationId, success, error) {
    cordova.exec(success, error, "serviceOnBoardingSDK", "statusOperationOnboardingService", [userIdentifier, operationId]);
};

ServiceOnBoardingSDK.prototype.addLocationOnboardingService = function(userIdentifier, operationId, latitude, longitude, success, error) {
    cordova.exec(success, error, "serviceOnBoardingSDK", "addLocationOnboardingService", [userIdentifier, operationId, latitude, longitude]);
};

ServiceOnBoardingSDK.prototype.addFrontOnboardingService = function(userIdentifier, operationId, imageBase64, country, documentType, documentVersion, hasBarcode, barcodeType, analyzeAnomalies, analyzeOcr, success, error) {
    cordova.exec(success, error, "serviceOnBoardingSDK", "addFrontOnboardingService", [userIdentifier, operationId, imageBase64, country, documentType, documentVersion, hasBarcode, barcodeType, analyzeAnomalies, analyzeOcr]);
};

ServiceOnBoardingSDK.prototype.addDocumentImageOnboardingService = function(userIdentifier, operationId, imageBase64, success, error) {
    cordova.exec(success, error, "serviceOnBoardingSDK", "addDocumentImageOnboardingService", [userIdentifier, operationId, imageBase64]);
};

ServiceOnBoardingSDK.prototype.addBackOnboardingService = function(userIdentifier, operationId, imageBase64, country, documentType, documentVersion, hasBarcode, barcodeType, analyzeAnomalies, analyzeOcr, success, error) {
    cordova.exec(success, error, "serviceOnBoardingSDK", "addBackOnboardingService", [userIdentifier, operationId, imageBase64, country, documentType, documentVersion, hasBarcode, barcodeType, analyzeAnomalies, analyzeOcr]);
};

ServiceOnBoardingSDK.prototype.addOcrOnboardingService = function(userIdentifier, operationId, document, imageBase64, data, success, error) {
    cordova.exec(success, error, "serviceOnBoardingSDK", "addOcrOnboardingService", [userIdentifier, operationId, document, imageBase64, data]);
};

ServiceOnBoardingSDK.prototype.addBarcodeOnboardingService = function(userIdentifier, operationId, document, data, success, error) {
    cordova.exec(success, error, "serviceOnBoardingSDK", "addBarcodeOnboardingService", [userIdentifier, operationId, document, data]);
};

ServiceOnBoardingSDK.prototype.addAnomaliesOnboardingServiceString = function(userIdentifier, operationId, document, imageBase64, data, success, error) {
    cordova.exec(success, error, "serviceOnBoardingSDK", "addAnomaliesOnboardingServiceString", [userIdentifier, operationId, document, imageBase64, data]);
};

ServiceOnBoardingSDK.prototype.registerOnboardingService = function(selfieBodyList, userIdentifier, operationId, success, error) {
    cordova.exec(success, error, "serviceOnBoardingSDK", "registerOnboardingService", [selfieBodyList, userIdentifier, operationId]);
};

ServiceOnBoardingSDK.prototype.scoreOnboardingService = function(userIdentifier, operationId, success, error) {
    cordova.exec(success, error, "serviceOnBoardingSDK", "scoreOnboardingService", [userIdentifier, operationId]);
};

ServiceOnBoardingSDK.prototype.captureFront = function(title, instructions, scanCountry, showTutorial, tutorialTitle, tutorialDescription, faceDetectionMaximumWait, tutorialNextButtonText, showPreview, previewConfirmationText, color, buttonCloseTutorialEnabled, success, error) {
    cordova.exec(success, error, "serviceOnBoardingSDK", "captureFront", [title, instructions, scanCountry, showTutorial, tutorialTitle, tutorialDescription, faceDetectionMaximumWait, tutorialNextButtonText, showPreview, previewConfirmationText, color, buttonCloseTutorialEnabled]);
};

ServiceOnBoardingSDK.prototype.captureBack = function(title, instructions, scanCountry, barcodeDetectionMaximumWait, showTutorial, tutorialTitle, tutorialDescription, tutorialNextButtonText, showPreview, previewConfirmationText, color, buttonCloseTutorialEnabled, success, error) {
    cordova.exec(success, error, "serviceOnBoardingSDK", "captureBack", [title, instructions, scanCountry, barcodeDetectionMaximumWait, showTutorial, tutorialTitle, tutorialDescription, tutorialNextButtonText, showPreview, previewConfirmationText, color, buttonCloseTutorialEnabled]);
};

ServiceOnBoardingSDK.prototype.captureSelfie = function(infoText, neutralText, smileText, closeEyesText, waitText, cameraFrames, neutralFrames, smileFrames, closeEyesFrames, showTutorial, tutorialTitle, tutorialDescription, tutorialNextButtonText, color, closeText, buttonCloseEnabled, buttonCloseTutorialEnabled, success, error) {
    cordova.exec(success, error, "serviceOnBoardingSDK", "captureSelfie", [infoText, neutralText, smileText, closeEyesText, waitText, cameraFrames, neutralFrames, smileFrames, closeEyesFrames, showTutorial, tutorialTitle, tutorialDescription, tutorialNextButtonText, color, closeText, buttonCloseEnabled, buttonCloseTutorialEnabled]);
};

ServiceOnBoardingSDK.prototype.captureQR = function(title, instructions, scanCountry, barcodeDetectionMaximumWait, showTutorial, tutorialTitle, tutorialDescription, tutorialNextButtonText, showPreview, previewConfirmationText, color, buttonCloseTutorialEnabled, success, error) {
    cordova.exec(success, error, "serviceOnBoardingSDK", "captureQR", [title, instructions, scanCountry, barcodeDetectionMaximumWait, showTutorial, tutorialTitle, tutorialDescription, tutorialNextButtonText, showPreview, previewConfirmationText, color, buttonCloseTutorialEnabled]);
};

module.exports = new ServiceOnBoardingSDK();
});
