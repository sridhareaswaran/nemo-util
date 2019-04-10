'use strict'

var log = require('debug')('nemo-util:log')
var By = require('selenium-webdriver').By
var until = require('selenium-webdriver').until

module.exports = {

	"setup": function (nemo, callback) {

		nemo.util = {}

		/**
		 * Scrolls to top of the webpage.
		 * @example
		 * nemo.util.scrollToTop()
		 */
		nemo.util.scrollToTop = function () {
			log(`Scrolling to page top.`)
			console.log('ssssss')
			return nemo.driver.executeScript(`window.scrollTo(document.body.scrollHeight, 0)`)
		}

		/**
		 * Scrolls to bottom of the webpage.
		 * @example
		 * nemo.util.scrollToBottom()
		 */
		nemo.util.scrollToBottom = function () {
			log(`Scrolling to page bottom.`)
			console.log('vvvvvv')
			return nemo.driver.executeScript(`window.scrollTo(0, document.body.scrollHeight)`)
		}

		/**
		 * Maximize browser window.
		 * @example
		 * nemo.util.maximizeWindow()
		 */
		nemo.util.maximizeWindow = function () {
			log(`Maximize browser window.`)
			return nemo.driver.manage().window().maximize()
		}

		/**
		 * Scrolls to particular web element provided as the input.
		 * @param {WebElement} webElement
		 * @example
		 * nemo.util.maximizeWindow()
		 */
		nemo.util.scrollInToView = function (webElement) {
			log(`Scrolling to web element view.`)
			return nemo.driver.executeScript(`arguments[0].scrollIntoView(true)`, webElement)
		}

		/**
		 * Waits till the webpage completes loading Javascript.
		 * @param {number} [timeout=30000] Timeout in milliseconds. Defaults to 30 seconds.
		 * @example
		 * await nemo.util.waitForJSReady(45 * 1000)
		 */
		nemo.util.waitForJSReady = function (timeout = 30 * 1000) {
			log(`Waiting for webpage readyness.`)
			return nemo.driver.wait(function () {
				var s = nemo.driver.executeScript(`return document.readyState === 'complete'`)
				console.log(s)
				return nemo.driver.executeScript(` return document.readyState === 'complete'`)
			}, timeout, `Webpage haven't reached readyState after ${timeout / 1000} seconds.`)
		}

		/**
		 * Hovers on the web element provided.
		 * @param {WebElement} webElement Web element.
		 * @example
		 * let element = await nemo.view._find('.result')
		 * await nemo.util.hoverOn(element)
		 */
		nemo.util.hoverOn = function (webElement) {
			log(`Hovering on a web element.`)
			return nemo.driver.actions().mouseMove(webElement).perform()
		}

		/**
		 * Hovers and clicks on the web element provided.
		 * @param {WebElement} webElement Web element.
		 * @example
		 * let element = await nemo.view._find('.result')
		 * await nemo.util.hoverAndClick(element)
		 */
		nemo.util.hoverAndClick = function (webElement) {
			log(`Hover & click on a web element.`)
			return nemo.driver.actions().mouseMove(webElement).click().perform()
		}

		/**
		 * Double click on the web element provided.
		 * @param {WebElement} webElement Web element.
		 * @example
		 * let element = await nemo.view._find('.result')
		 * await nemo.util.doubleClick(element)
		 */
		nemo.util.doubleClick = function (webElement) {
			log(`Double click on a web element.`)
			return nemo.driver.actions().doubleClick(webElement).perform()
		}

		/**
		 * Right/Context click on the web element provided.
		 * @param {WebElement} webElement Web element.
		 * @example
		 * let element = await nemo.view._find('.result')
		 * await nemo.util.rightClick(element)
		 */
		nemo.util.rightClick = function (webElement) {
			log(`Right click on a web element.`)
			return nemo.driver.actions().contextClick(webElement).perform()
		}

		/**
		 * Clicks on the web element using Javascript. Useful at places where selenium click doesn't works.
		 * @param {WebElement} webElement Web element.
		 * @example
		 * let element = await nemo.view._find('.result')
		 * await nemo.util.javascriptClick(element)
		 */
		nemo.util.javascriptClick = function (webElement) {
			log(`Click a web element using Javascript.`)
			return nemo.driver.executeScript(`arguments[0].click()`, webElement)
		}

		/**
		 * Clears value of `Input` tag element.
		 * @param {string} webElement_ID ID of the web element.
		 * @example
		 * <input id='car' value='testla'></input>
		 * @example
		 * await nemo.util.clearInputValue('car')
		 */
		nemo.util.clearInputValue = function (webElement_ID) {
			log(`Clear input value for <input> tag element.`)
			return nemo.driver.executeScript(`document.getElementById('${webElement_ID}').value = ''`)
		}

		/**
		 * Returns value of `Input` tag element.
		 * @param {string} webElement_ID ID of the web element.
		 * @example
		 * <input id='car' value='testla'></input>
		 * @example
		 * let value = await nemo.util.getInputValue('car') // value = 'tesla'
		 */
		nemo.util.getInputValue = function (webElement_ID) {
			log(`Get input value for <input> tag element.`)
			return nemo.driver.executeScript(`return document.getElementById('${webElement_ID}').value`)
		}

		/**
		 * Sets value of `Input` tag element.
		 * @param {string} webElement_ID ID of the web element.
		 * @param {string} value Value to be updated.
		 * @example
		 * <input id='car' value='testla'></input>
		 * @example
		 * await nemo.util.setInputValue('car', 'Honda')
		 */
		nemo.util.setInputValue = function (webElement_ID, value) {
			log(`Get input value for <input> tag element.`)
			return nemo.driver.executeScript(`return document.getElementById('${webElement_ID}').value = ${value}`)
		}

		/**
		 * Checks if a `Checkbox` element is checked.
		 * @param {WebElement} webElement Web element.
		 * @returns {boolean}
		 * @example
		 * let element = await nemo.view._find('.result')
		 * let flag = await nemo.util.isChecked(element)
		 */
		nemo.util.isChecked = function (webElement) {
			log(`Is Checkbox checked.`)
			return nemo.driver.executeScript(`return arguments[0].checked`, webElement)
		}

		/**
		 * Returns the `Inner Text` of the web element.
		 * @param {WebElement} webElement Web element.
		 * @return {string}
		 * @example
		 * let element = await nemo.view._find('.result')
		 * let data = await nemo.util.getInnerText(element)
		 */
		nemo.util.getInnerText = function (webElement) {
			log(`Get inner text of web element.`)
			return nemo.driver.executeScript(`return arguments[0].innerText`, webElement)
		}

		/**
		 * Verify if the image web element is loaded & displayed to user.
		 * @param {WebElement} webElement Image web element.
		 * @param {number} [timeout=30000] Timeout in milliseconds. Defaults to 30 seconds.
		 * @returns {Promise<boolean>}
		 * @example
		 * let element = await nemo.view._find('.img')
		 * let flag = await nemo.util.isImageLoaded(element)
		 * or
		 * let flag = await nemo.util.isImageLoaded(element, 45 * 1000)
		 */
		nemo.util.isImageLoaded = function (webElement, timeout = 30 * 1000) {
			log(`Check if image is loaded completely.`)
			return nemo.driver.wait(function () {
				let script = `return arguments[0].complete && typeof arguments[0].naturalWidth != "undefined" && arguments[0].naturalWidth > 0`
				return nemo.driver.executeScript(script, webElement)
			}, timeout, `Image not loaded after ${timeout / 1000} seconds`)
		}

		/**
		 * Returns a list of all the `anchor` tag elements.
		 * @returns {List<WebElement>}
		 * @example
		 * let list = await nemo.util.getAllLinkElements()
		 */
		nemo.util.getAllLinkElements = function () {
			log(`Fetching all anchor tag elements.`)
			return nemo.driver.findElements(By.tagName('a'))
		}

		/**
		 * Returns elements whose visible text matches the given string.
		 * @param {string} linkText Visible text of the link displayed.
		 * @returns {Promise<WebElement>}
		 * @example
		 * let element = await nemo.util.getElementWithLinkText('Elon Musk')
		 */
		nemo.util.getElementWithLinkText = function (linkText) {
			log(`Getting element with link text - ${linkText}`)
			return nemo.driver.findElement(By.linkText(linkText))
		}

		/**
		 * Clicks on element whose visible text matches the given string.
		 * @param {string} linkText Visible text of the link displayed.
		 * @example
		 * let element = await nemo.util.clickElementWithLinkText('Elon Musk')
		 */
		nemo.util.clickElementWithLinkText = function (linkText) {
			log(`Clicking on element with link text - ${linkText}`)
			return nemo.driver.findElement(By.linkText(linkText)).then(function (element) {
				element.click()
			})
		}

		/**
		 * Waits till an alert shows up on the webpage.
		 * @example
		 * await nemo.util.waitTillAlertDisplayed()
		 */
		nemo.util.waitTillAlertDisplayed = function () {
			log(`Waiting till alert is displayed.`)
			return nemo.driver.wait(until.alertIsPresent())
		}

		/**
		 * Accepts the alert displayed on the webpage.
		 * @example
		 * await nemo.util.acceptAlert()
		 */
		nemo.util.acceptAlert = function () {
			log(`Accepting Alert.`)
			return nemo.driver.switchTo().alert().accept()
		}

		/**
		 * Dismiss the alert displayed on the webpage.
		 * @example
		 * await nemo.util.dismissAlert()
		 */
		nemo.util.dismissAlert = function () {
			log(`Dismissing Alert.`)
			return nemo.driver.switchTo().alert().dismiss()
		}

		callback(null)
	}
}
