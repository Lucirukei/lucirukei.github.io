
/*
import {circleArrowSvg} from "../svg/circle-arrow-icon.js";
import {cogSvg} from "../svg/cog-icon.js";
import {flowerSvg} from "../svg/flower-icon.js";
import {githubSvg} from "../svg/github-icon.js";
import {instagramSvg} from "../svg/instagram-icon.js";
import {mailSvg} from "../svg/mail-icon.js";
import {redditSvg} from "../svg/reddit-icon.js";

const iconMap = new Map();
iconMap.set(`github-icon`, githubSvg);
iconMap.set(`cog-icon`, cogSvg);
iconMap.set(`instagram-icon`, instagramSvg);
iconMap.set(`mail-icon`, mailSvg);
iconMap.set(`reddit-icon`, redditSvg);
iconMap.set(`circle-arrow-icon`, circleArrowSvg);
iconMap.set(`flower-icon`, flowerSvg);

*/

function insertHtml(className, text) {
	const elements = document.getElementsByClassName(className);
	for(const element of elements){
		element.insertAdjacentHTML('beforeend', text);
	}
}
