/**
 * Add an event listener to the given element, that triggers on child elements with the given selector
 */
export default function (element: HTMLElement, eventType: string, selector: string, callback: (ev: Event, element: Element) => void) {
	element.addEventListener(eventType, ev => {
		let node: HTMLElement | null = <HTMLElement>ev.target
		while (node !== element && node !== null) {
			if (node.matches(selector)) {
				callback(ev, node)
				break
			}
			node = node.parentElement
		}
	})
}
