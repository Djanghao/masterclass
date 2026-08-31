# ✅ O(n) Direction Accumulator | FP, Currying

**Author:** eleev
**Votes:** 1
**Link:** [https://leetcode.com/problems/snake-in-matrix/solutions/5623061/](https://leetcode.com/problems/snake-in-matrix/solutions/5623061/)

---

# Solution
```swift
struct Solution {
    @_optimize(speed)
    func finalPositionOfSnake(_ n: Int, _ commands: [String]) -> Int {
        let dirs: [String: Position<Int>] = [
            "RIGHT": .init(0, 1), "DOWN": .init(1, 0), "LEFT": .init(0, -1), "UP": .init(-1, 0)
        ]
        let transform = transforming(dirs)
        let position = commands.reduce(.zero, combining(transform, by: +))
        return position.x * n + position.y
    }
}

private func combining<Root, Value>(
    _ f: @escaping (Root) -> Value,
    by g: @escaping (Value, Value) -> Value
) -> (Value, Root) -> Value {
    { g($0, f($1)) }
}

private func transforming(
    _ dict: [String: Position<Int>]
) -> (String) -> Position<Int> {
    {  dict[$0] ?? .zero }
}

private struct Position<T: AdditiveArithmetic> {
    let x: T
    let y: T

    init(_ x: T, _ y: T) {
        self.x = x
        self.y = y
    }
}

private extension Position {
    static func + (lhs: Self, rhs: Self) -> Self {
        Self(lhs.x + rhs.x, lhs.y + rhs.y)
    }
}

private extension Position {
    static var zero: Position<T> {
        Self(T.zero, T.zero)
    }
}
```