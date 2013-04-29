# Field Service with Windows Azure Mobile Services

This is a modified version of the field service sample presented at Evolve 2013 to illustrate the capabilities of Windows Azure Mobile Services.

This modified version takes a small segment of the assignment data and stores it in the cloud so that users can collaborate. Users log in with twitter to allow the system to record which users are working on which assignments, and when assignments are changed push notifications are sent.

### How do I find the Mobile Services specific code?

It was added in a few different files - I suggest you look in the history of this git repository to see the changes that were made to the sample.

### Setup

You will need a Windows Azure account to run this code. Go to [Windows Azure](http://www.windowsazure.com) and sign up for a free trial if you don't have an account.

1. Create your mobile service and copy the URL and Application Key and paste them into ServiceRegistrar.cs
2. Create the following tables: AssignmentState and Device
3. Upload the insert scripts for the AssignmentState and Device tables, found in the Scripts folder.
4. Configure your mobile service for Twitter auth (see [here](http://www.windowsazure.com/en-us/develop/mobile/how-to-guides/register-for-twitter-authentication/))
5. Configure your mobile service for iOS push notifications - this requires you to create a provisioning profile and upload a .p12 into the Azure portal. These steps are covered in [this tutorial](http://www.windowsazure.com/en-us/develop/mobile/tutorials/get-started-with-push-ios/).
6. Configure the Field Service iOS project to use your provisioning profile and application identifier.

### Limitations

Please note that this code was written for illustrative purposes as part of a short presentation and is not a complete sample.

### Contact
For any questions please email me at pbatum@microsoft.com