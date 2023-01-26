class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	getNode(idx) {
		let curr = this.first;
		let count = 0;
		while (idx !== count) {
			curr = curr.next;
			count++;
		}
		return curr;
	}

	/** enqueue(val): add new value to end of the queue. Returns undefined. */

	enqueue(val) {
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

	/** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

	dequeue() {
		if (this.isEmpty()) {
			throw new Error('This Queue is empty');
		}
		const gone = this.getNode(0);
		this.first = this.first.next;
		this.size--;
		return gone;
	}

	/** peek(): return the value of the first node in the queue. */

	peek() {
		return this.first;
	}

	/** isEmpty(): return true if the queue is empty, otherwise false */

	isEmpty() {
		if (this.size > 0) return false;
		return true;
	}
}

module.exports = Queue;
