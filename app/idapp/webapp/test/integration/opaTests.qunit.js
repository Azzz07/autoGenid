sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'idapp/test/integration/FirstJourney',
		'idapp/test/integration/pages/tabList',
		'idapp/test/integration/pages/tabObjectPage'
    ],
    function(JourneyRunner, opaJourney, tabList, tabObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('idapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThetabList: tabList,
					onThetabObjectPage: tabObjectPage
                }
            },
            opaJourney.run
        );
    }
);