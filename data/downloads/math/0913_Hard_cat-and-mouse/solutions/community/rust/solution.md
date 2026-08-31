# O(n^3) Topological sort + DP explained

**Author:** Martician
**Votes:** 0
**Link:** [https://leetcode.com/problems/cat-and-mouse/solutions/4977766/](https://leetcode.com/problems/cat-and-mouse/solutions/4977766/)

---

# State Graph
The cat and mouse game can be modeled by a state graph(or a finite state machine).
We define the following to be a state:
```(mouse_pos, cat_pos, turn)``` where ```mouse_pos``` can be any node in the input graph, ```cat_pos``` is a non-zero node and ```turn``` is either ```0```(mouse_turn) or ```1```(cat_turn).

A state graph is a graph where the nodes are all possible states and the edges are the transitions between states as described by the rules of the game.

A result of some state ```(mouse_pos, cat_pos, turn)``` is how the game would finish if mouse started at ```mouse_pos```, cat started at ```cat_pos``` and the turn is ```turn```.

We are interested in the result of state ```(1, 2, 0)```.
# Why DFS doesn't work
Observe that for every state the result of the game could be derived by the results of adjacent states (For example if mouse is on turn and there is an adjacent state for which mouse wins the mouse will always move to it and win). My initial idea was to start from state ```(1, 2, 0)```, find the results for it's adjacent states and then derive it's result. However this approach does not work, since adjacent states in turn depend on the result of the original state (in other words we will bump into unresolvable circular dependencies).

# A better approach
Instead of starting from a state with an unknown result we can start from states for which we already know the results:
```
(0, x, 1) - mouse is at the hole so the result is mouse_win
(x, x, {0, 1}) - the mouse bumped into the cat or the
                 cat bumped into the mouse, either way it's a cat_win 
```

How do we derive results for other states?
We push the states for which we have a definite result on a stack then for each state we pop from the stack we would try to find the results for adjacent states(and add them to the stack) using the following rule:
```
Let u = (mouse_pos, cat_pos, turn) be a vertex in the state graph
and let v = (previous_mouse_pos, previous_cat_pos, previous_turn)
be an adjacent vertex:

If v already has a final result associated with it(mouse_win/cat_win)
we skip it.

If previous_turn == mouse_turn && u is a mouse_win, 
v is also a mouse_win(mouse moves from v to u and wins)

If previous_turn == cat_turn && u is a cat_win
v is also a cat_win(cat moves from v to u and wins)

If previous_turn == mouse_turn && all adjacent states of v
are cat_win, v is also a cat_win(wherever mouse goes, cat wins)

If previous_turn == cat_turn && all adjacent states of v
are mouse_win, v is also a mouse_win(wherever cat goes, mouse wins)
```

For the last two rules we can use an array ```degrees``` where:
```degrees[mouse_pos][cat_pos][turn]``` is the number of unexplored states adjacent to ```(mouse_pos, cat_pos, turn)```. If ```degrees[mouse_pos] == 0``` we know all adjacent states of ```v``` are a win for the opponent.

# Time Complexity
The number of states we are going to push on the stack varies for different inputs. We will first show an upper bound:
Each state can only enter the stack once and each vertex is traversed twice (from both sides), thus the worst case time complexity is $$O(vertices + edges)$$. But vertices = $$O(n^2)$$ and edges = $$O(vertices*n) = O(n^3)$$, (the rules of the game limit each vertex' degree to at most $$n-1$$) thus $$O(vertices + edges) = O(n^2 + n^3) = O(n^3)$$.
To prove that the complexity is $$\\Theta(n^3)$$ we are going to give an $$\\Omega(n^3)$$ example:
```
   (1)-(2)                                  // branch 1
  /
(0)--{complete graph with n-3 vertices}     // branch 2
```
It's obvious that for every state where ```cat_pos``` is in ```branch 2``` and ```mouse_pos``` is in ```branch 2``` the result is either ```mouse_win```(if mouse is on turn, it can immediately jump to it's hole) or a ```cat_win```(if cat is on turn it can immediately catch the mouse). That yields $$\\Theta(n^2)$$ non-draw states which we put on the stack. Each state in ```branch 2``` has approximately $$n$$ adjacent states, so the edges we have to traverse are $$\\Theta(n^3)$$ and the algorithm runs in $$\\Omega(n^3)$$. (Observe that the winning state ```(1, 2, 0)``` can be only derived from state ```(0, 2, 1)``` which is initially pushed (almost) at the bottom of the stack so we have to traverse the whole ```branch 2``` before finding the result for the initial state)

Note: This is example for the stack(dfs-like) implementation, there are other examples for the queue(bfs-like) implementation which are also $$\\Theta(n^3)$$.

# Code
```
impl Solution {
    pub fn cat_mouse_game(graph: Vec<Vec<i32>>) -> i32 {
        let n = graph.len();

        let mouse_turn = 0;
        let cat_turn = 1;

        let mouse_win = 1;
        let cat_win = 2;
        let draw = 0;

        let mut dp = vec![vec![[0, 0]; n]; n];
        let mut degrees = vec![vec![[0, 0]; n]; n];
        let mut stack = vec![];

        for cat_pos in 1..n {
            dp[0][cat_pos][cat_turn] = mouse_win;
            dp[cat_pos][cat_pos] = [cat_win, cat_win];
            stack.push((0, cat_pos, cat_turn));
            stack.push((cat_pos, cat_pos, mouse_turn));
            stack.push((cat_pos, cat_pos, cat_turn));
            for mouse_pos in 0..n {
                degrees[mouse_pos][cat_pos][mouse_turn] = graph[mouse_pos].len();
                degrees[mouse_pos][cat_pos][cat_turn] = graph[cat_pos].len();
            }
        }

        for mouse_pos in 0..n {
            for &cat_pos in &graph[0] {
                degrees[mouse_pos][cat_pos as usize][cat_turn] -= 1;
            }
        }

        while let Some((mouse_pos, cat_pos, turn)) = stack.pop() {
            let rez = dp[mouse_pos][cat_pos][turn];
            let previous_turn = 1 - turn;

            let previous_positions: Box<dyn Iterator<Item = (usize, usize)>> = if turn == mouse_turn
            {
                Box::new(
                    std::iter::repeat(mouse_pos).zip(
                        graph[cat_pos]
                            .iter()
                            .filter_map(|&pos| (pos != 0).then_some(pos as usize)),
                    ),
                )
            } else {
                Box::new(
                    graph[mouse_pos]
                        .iter()
                        .map(|&pos| pos as usize)
                        .zip(std::iter::repeat(cat_pos)),
                )
            };

            for (previous_mouse_pos, previous_cat_pos) in previous_positions {
                if dp[previous_mouse_pos][previous_cat_pos][previous_turn] != 0 {
                    continue;
                }
                let win_state = (rez == mouse_win && previous_turn == mouse_turn)
                    || (rez == cat_win && previous_turn == cat_turn);
                if !win_state && degrees[previous_mouse_pos][previous_cat_pos][previous_turn] != 1 {
                    degrees[previous_mouse_pos][previous_cat_pos][previous_turn] -= 1;
                    continue;
                }
                dp[previous_mouse_pos][previous_cat_pos][previous_turn] = rez;
                // early return, you can remove it
                if previous_mouse_pos == 1 && previous_cat_pos == 2 && previous_turn == mouse_turn {
                    return rez;
                }
                stack.push((previous_mouse_pos, previous_cat_pos, previous_turn));
            }
        }

        dp[1][2][mouse_turn]
    }
}
```