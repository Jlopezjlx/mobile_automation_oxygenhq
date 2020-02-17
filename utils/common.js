module.exports = {
    StartApp: function()
    {
        mob.init(
        {
            "platformName": "Android",
            "platformVersion":"9.0",
            "deviceName": "samsung_SM-T385M",
            "automationName": "UiAutomator2",
            "appWaitActivity": "com.claro.sgv.ui.startup.splash.SplashActivity",
            "appActivity": "com.claro.sgv.ui.startup.splash.SplashActivity",
            "autoGrantPermissions": true,
            "app": "C:/Users/jairo/OneDrive/Escritorio/SGV-Automation/mobile/project/resources/apk/SGVAppMobileAutomation-v2.0.8.apk"
        }
        )
    }
}