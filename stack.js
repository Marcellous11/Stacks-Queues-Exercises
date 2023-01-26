/** Node: node for a stack. */

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	getNodeAt(idx) {
		if (idx > this.size) {
			throw new Error(`Number must be 0-${this.size - 1}`);
		}
		let current = this.first;
		let count = 0;
		while (idx !== count) {
			current = current.next;
			count++;
		}
		return current;
	}

	/** push(val): add new value to end of the stack. Returns undefined. */

	push(val) {
		const newNode = new Node(val);

		if (this.size < 1) {
			this.first = newNode;
			this.last = newNode;
		}
		this.last.next = newNode;
		this.last = newNode;

		this.size++;
		return undefined;
	}

	/** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

	pop() {
		const pre = this.getNodeAt(this.size - 2);
		const last = this.getNodeAt(this.size - 1);
		pre.next = null;
		this.last = pre;
		this.size--;
		return last;
	}

	/** peek(): return the value of the first node in the stack. */

	peek() {
		return this.first;
	}

	/** isEmpty(): return true if the stack is empty, otherwise false */

	isEmpty() {
		if (this.size > 0) return false;
		return true;
	}
}

module.exports = Stack;
