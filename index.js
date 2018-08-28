/**
 * Add an event listener to the given element, that triggers on child elements with the given selector
 *
 * @param element {Element}
 * @param eventType {string}
 * @param selector {string}
 * @param callback {function(ev: Event, element: Element)}
 */
export default function(element, eventType, selector, callback) {
	element.addEventListener(eventType, ev => {
		/** @type {Element} */
		let node = ev.target
		while (node !== element) {
			if (node.matches(selector)) {
				callback(ev, node)
				break
			}
			node = node.parentElement
		}
	})
}
