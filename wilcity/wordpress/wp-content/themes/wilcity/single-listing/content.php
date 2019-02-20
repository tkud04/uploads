<?php
use WilokeListingTools\Frontend\SingleListing;
get_template_part('single-listing/home');
global $post, $aWilcitySingleTabSettings;

$aTabs = SingleListing::getNavOrder();
if ( !empty($aTabs) ){
	foreach ($aTabs as $aWilcityTab){
		if ( $aWilcityTab['status'] == 'no' ){
			continue;
		}
		$fileName = isset($aWilcityTab['isCustomSection']) && $aWilcityTab['isCustomSection'] == 'yes' ? 'custom' : $aWilcityTab['key'];
		$wilcity['aTab'] = $aWilcityTab;
		$aWilcitySingleTabSettings = $aWilcityTab;
		get_template_part('single-listing/tabs/'.$fileName);
	}
}