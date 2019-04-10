export const util = async (driver) => {
	
	const waitForJSReady = async (timeout = 30 * 1000) => {
		return driver.wait(() => {
			return driver.executeScript(() => {
				return (document.readyState === 'complete')
			})
		}, timeout, `JavaScript didn't load after ${timeout} seconds`)
	}

	const maximizeWindow = async () => {
		await driver.manage().window().maximize()
	}

	const scrollTo = async (webElement) => {
		await driver.executeScript('arguments[0].scrollIntoView(true)', webElement)
	}

	const scrollToTop = async () => {
		await driver.executeScript('window.scrollTo(document.body.scrollHeight, 0)')
	}

	const scrollToBottom = async () => {
		await driver.executeScript('window.scrollTo(0, document.body.scrollHeight)')
	}

	const hoverOn = async (webElement) => {
		await driver.actions().mouseMove(webElement).perform()
	}

	const hoverAndClick = async (webElement) => {
		await driver.actions().mouseMove(webElement).click().perform()
	}

	const javascriptClick = async (webElement) => {
		await driver.executeScript('arguments[0].click()', webElement)
	}

	const clearInputValue = async (webElement_ID) => {
		await driver.executeScript(`document.getElementById('${webElement_ID}').value = ''`)
	}

	const getInputValue = async (webElement_ID) => {
		return await driver.executeScript(`return document.getElementById('${webElement_ID}').value`)
	}

	const isChecked = async (webElement) => {
		return await driver.executeScript('return arguments[0].checked', webElement)
	}

	const getInnerText = async (webElement) => {
		return await driver.executeScript('return arguments[0].innerText', webElement)
	}

	const is_image_loaded = async (webElement, timeout = 20 * 1000) => {
		return driver.wait(async () => {
			let script = `return arguments[0].complete && typeof arguments[0].naturalWidth != "undefined" && arguments[0].naturalWidth > 0`
			return await driver.executeScript(script, webElement)
		}, timeout, `Image didn't load after ${timeout} seconds.`)
	}

	const getAllLinkElements = async () => {
		return await driver.findElements(By.tagName('a'))
	}

	const getElementWithLinkText = async (linkTxt) => {
		return await driver.findElement(By.linkText(linkTxt))
	}

	const clickElementWithLinkText = async (linkTxt) => {
		let element = await driver.findElement(By.linkText(linkTxt))
		await element.click()
	}

	const acceptAlert = async () => {
		await driver.wait(until.alertIsPresent())
		await driver.sleep(1 * 1000)
		await driver.switchTo().alert().accept()
		await driver.sleep(1 * 1000)
	}

	return {
		waitForJSReady: waitForJSReady,
		maximizeWindow: maximizeWindow,
		scrollTo: scrollTo,
		scrollToTop: scrollToTop,
		scrollToBottom: scrollToBottom,
		hoverOn: hoverOn,
		hoverAndClick: hoverAndClick,
		javascriptClick: javascriptClick,
		clearInputValue: clearInputValue,
		getInputValue: getInputValue,
		isChecked: isChecked,
		getInnerText: getInnerText,
		is_image_loaded: is_image_loaded,
		getAllLinkElements: getAllLinkElements,
		getElementWithLinkText: getElementWithLinkText,
		clickElementWithLinkText: clickElementWithLinkText,
		acceptAlert: acceptAlert
	}
}
