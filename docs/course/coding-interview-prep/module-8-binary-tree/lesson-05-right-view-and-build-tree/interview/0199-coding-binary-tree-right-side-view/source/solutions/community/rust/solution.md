# Idiomatic Rust || 0 ms solution || using BFS

**Author:** user5419d
**Votes:** 5
**Link:** [https://leetcode.com/problems/binary-tree-right-side-view/solutions/765813/](https://leetcode.com/problems/binary-tree-right-side-view/solutions/765813/)

---

Interacting with trees and other data structures with rust can be a pain because of the issues needing mutable pointers to an immutable object. Definitely read the [Smart pointers](/https://doc.rust-lang.org/book/ch15-00-smart-pointers.html/) Chapter of the rust documentation, if you haven't already/don't know about smart pointers.

High level overview, the question employs a  little misdirection so you won't immediately realize it is a problem that can easily be solved by breadth-first-search (BFS). The wording given is basically the same as return the rightmost value for every row in the tree. If you recall, BFS traverses the tree by each row in left to right order, if you keep track of each row, you'll be traversing the tree in level-order-traversal. So we'll just get each of the row's last value and push it onto the ans array. There are a lot of BFS and level-order-traversal resources, so I will focus on satisfying with the Rust compilier instead :) All comments are in line.

First let's look at the function declaration: `pub fn right_side_view(root: Option<Rc<RefCell<TreeNode>>>) -> Vec<i32>`
Rust is a strongly typed language, so we need to know the type of the each root node. It's the [Option enum](https://doc.rust-lang.org/book/ch06-01-defining-an-enum.html) containing a smart pointer to a `TreeNode` struct. 

```
pub fn right_side_view(root: Option<Rc<RefCell<TreeNode>>>) -> Vec<i32> {
	// Create the vector that we will return, notice rust compiler can figure out the type
	let mut ans = vec![]; 
	
	// Create Vec<Rc<RefCell<TreeNode>> we will use to do our BFS
	// We no longer use Option<T> because it we will only push onto this vec
	// if the enum is some (which we will enforce with pattern matching.

	let mut bfs = vec![]; 
	
	// First example of pattern matching. If root contains something,
	// we'll push the inner part of the enum onto the back of our bfs queue.
	// If it contains nothing, we'll do nothing a.k.a. ()
	match root {
		Some(x) => bfs.push(x),
		None => ()
	}
    
	// main loop of BFS, keep going if there is something in the queue.
	while bfs.len() != 0 {
		// First think we want to do is get the value of the TreeNode at the rightmost val
		// of the bfs vec
		ans.push(bfs[bfs.len()-1].borrow().val);
        // Note we have to borrow the node to get access to follow the smart pointer to 
		// the struct itself.
		
		// now we're ready to find the next row/level
		let mut row = vec![];
		for node in bfs.iter() {
			// another match statement as before, except this time we borrow the left value as a reference.
			match node.borrow().left.as_ref() {
				// only push onto row if the node actually contains something.
				Some(x) => row.push(Rc::clone(x)), 
				None => (),
			};
			// We also have to clone the pointer, as opposed to before. Why? Both the TreeNode and our row will 
			// point to the leaf in the tree. That's a problem because rust worries about things like double
			// free errors. You need to do the reference counting yourself, and the memory will only be deallocated
			// when there are no strong references to a particular struct/object. 
			// This is basically manual garbage collection and does incur a runtime penalty
			
			// Nothing fancy rustwise here. just the same thing 
			match node.borrow().right.as_ref() {
				Some(x) => row.push(Rc::clone(x)),
				None => (),
			};
		};
		// make the queue equal to the row we just built, and go back to the while loop.
		bfs = row;
	}
	// return ans
	ans
}
