/**
 * Add an event listener to the given element, that triggers on child elements with the given selector
 *
 * @param element {Element}
 * @param selector {string}
 * @param eventType {string}
 * @param callback {function(ev: Event, element: Element)}
 */
export default function(element, selector, eventType, callback, stopAtFirstMatch = true) {
	element.addEventListener(eventType, ev => {
		/** @type {Element} */
		let node = ev.target
		do {
			if (node.matches(selector)) {
				callback(ev, node)
				if (stopAtFirstMatch) {
					break
				}
			}
			node = node.parentElement
		} while (node !== element)
	})
}
