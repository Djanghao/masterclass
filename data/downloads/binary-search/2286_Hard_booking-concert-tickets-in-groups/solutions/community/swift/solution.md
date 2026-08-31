# Swiftca

**Author:** namehere05
**Votes:** 0
**Link:** [https://leetcode.com/problems/booking-concert-tickets-in-groups/solutions/4394409/](https://leetcode.com/problems/booking-concert-tickets-in-groups/solutions/4394409/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
struct Leet2286_solution4 {
    
    enum ListType {
        case capacity
        case sameCapacity
        case scatter
    }
    
    struct Prism: Equatable {
        let listType: ListType
        let underlyingRow: RowNode?
        init?(listType: ListType, underlyingRow: RowNode?) {
            guard let underlyingRow = underlyingRow else { return nil }
            self.listType = listType
            self.underlyingRow = underlyingRow
        }
        
        static func == (lhs: Prism, rhs: Prism) -> Bool {
            return lhs.underlyingRow == rhs.underlyingRow
        }
        var next: Prism? {
            get {
                let next: RowNode?
                switch listType {
                case .capacity:
                    next = underlyingRow?.nextCapacity
                case .sameCapacity:
                    next = underlyingRow?.nextSameCapacityRow
                case .scatter:
                    next = underlyingRow?.nextScatterRow
                }
                return Prism(listType: listType, underlyingRow: next)
            }
            set {
                switch listType {
                case .capacity:
                    underlyingRow?.nextCapacity = newValue?.underlyingRow
                case .sameCapacity:
                    underlyingRow?.nextSameCapacityRow = newValue?.underlyingRow
                case .scatter:
                    underlyingRow?.nextScatterRow = newValue?.underlyingRow
                }
            }
        }
        var previous: Prism? {
            get {
                let previous: RowNode?
                switch listType {
                case .capacity:
                    previous = underlyingRow?.previousCapacity
                case .sameCapacity:
                    previous = underlyingRow?.previousSameCapacityRow
                case .scatter:
                    previous = underlyingRow?.previousScatterRow
                }
                return Prism(listType: listType, underlyingRow: previous)
            }
            set {
                switch listType {
                case .capacity:
                    underlyingRow?.previousCapacity = newValue?.underlyingRow
                case .sameCapacity:
                    underlyingRow?.previousSameCapacityRow = newValue?.underlyingRow
                case .scatter:
                    underlyingRow?.previousScatterRow = newValue?.underlyingRow
                }
            }
        }
        
        var isCapacityRow: Bool {
            get { return self.underlyingRow!.isCapacityRow }
        }
        
        var isSameCapacityTail: Bool {
            get { return self.underlyingRow!.isSameCapacityTail }
        }
    }
    
    
    class RowNode: Equatable, CustomDebugStringConvertible {
        
        
        
        struct ListSequencer: Sequence {
            
            struct Iterator: IteratorProtocol {
                
                enum Direction {
                    case forward
                    case backward
                }
                
                mutating func next() -> RowNode? {
                    let current = rowNode
                    rowNode = nextForList()
                    return current
                }
                
                typealias Element = RowNode
                var rowNode: RowNode?
                let list: ListType
                let direction: Direction
                init(rowNode: RowNode, list: ListType, direction: Direction) {
                    self.rowNode = rowNode
                    self.list = list
                    self.direction = direction
                }
                
                func nextForList() -> RowNode? {
                    switch direction {
                    case .forward:
                        switch list {
                        case .capacity:
                            return rowNode?.nextCapacity
                        case .sameCapacity:
                            return rowNode?.nextSameCapacityRow
                        case .scatter:
                            return rowNode?.nextScatterRow
                        }
                    case .backward:
                        switch list {
                        case .capacity:
                            return rowNode?.previousCapacity
                        case .sameCapacity:
                            return rowNode?.previousSameCapacityRow
                        case .scatter:
                            return rowNode?.previousScatterRow
                        }
                    }
                    
                }
            }
            
          
            
            let rowNode: RowNode
            let list: ListType
            let direction: Iterator.Direction
            
            init(rowNode: RowNode, list: ListType, direction: Iterator.Direction = .forward) {
                self.rowNode = rowNode
                self.list = list
                self.direction = direction
            }
            
            func makeIterator() -> Iterator {
                return Iterator(rowNode: rowNode, list: list, direction: direction)
            }
            
            /// A type representing the sequence's elements.
            typealias Element = RowNode
            
        }
        
        static func == (lhs: RowNode, rhs: RowNode) -> Bool {
            return lhs.rowIndex == rhs.rowIndex
        }
        
        let rowIndex: Int
        var freeCapacity: Int
        var initialCapacity: Int
        
        var firstFreeSeat: Int {
            return initialCapacity - freeCapacity
        }
        
        var previousSameCapacityRow: RowNode?
        var nextSameCapacityRow: RowNode?
        
        var previousCapacity: RowNode?
        var nextCapacity: RowNode?
        
        var previousScatterRow: RowNode?
        var nextScatterRow: RowNode?
        
        var isCapacityRow: Bool {
            return isCapacityRow(sameCapacityHead: sameCapacityHead, sameCapacityTail: sameCapacityTail)
        }
        
        func isCapacityRow(sameCapacityHead: RowNode?, sameCapacityTail: RowNode?) -> Bool {
            guard let sameCapacityHead = sameCapacityHead, let sameCapacityTail = sameCapacityTail else {
                return false
            }
            // elimination process
            if sameCapacityTail != self {
                return true
            } else {
                return sameCapacityHead == self
            }
        }
        
        weak var sameCapacityTail: RowNode? { // not nil only for the sameCapacity head
            didSet {
                guard sameCapacityTail != oldValue else { return }
                // head became tail
                guard !didSetSameCapacityTailFlag else { return }
                didSetSameCapacityTail(oldValue: oldValue, newValue: sameCapacityTail)
            }
        }
        
        var didSetSameCapacityTailFlag = false
        func didSetSameCapacityTail(oldValue: RowNode?, newValue: RowNode?) {
            let wasSameCapacityHead = isCapacityRow(sameCapacityHead: sameCapacityHead, sameCapacityTail: oldValue)
            didSetSameCapacityTailFlag = true
            defer { didSetSameCapacityTailFlag = false }
            assert(oldValue != newValue)
            // set head last because setting the tail will change head and you will want parents changes to prevail and oldValue before newValue same logic, because newValue can be 'self'
            if newValue != nil { // self is the new sameCapacity head
                
                oldValue?.sameCapacityTail = nil
                newValue?.sameCapacityTail = newValue
                oldValue?.sameCapacityHead = nil
                newValue?.sameCapacityHead = self
                sameCapacityHead = self
            } else {
                // no longer the head, but are you really head?
                
                if wasSameCapacityHead {
//                self.sameCapacityTail = nil
                    sameCapacityHead = nil
                    oldValue?.sameCapacityTail = nil
                    oldValue?.sameCapacityHead = nil
                } else {
                    let oldSameCapacityHead = sameCapacityHead
                    oldSameCapacityHead?.sameCapacityTail = nil
                }
             
            }
            
            sameCapacityTail = newValue
        }
        
        var isSameCapacityTail: Bool {
            guard let sameCapacityHead = sameCapacityHead, let sameCapacityTail = sameCapacityTail else {
                return false
            }
            // elimination process
            if sameCapacityHead != self {
                return true
            } else {
                return sameCapacityTail == self
            }
        }
        private(set) weak var sameCapacityHead: RowNode? // not nil only for the sameCapacity tail
        
        init(row: Int, initialCapacity: Int) {
            self.rowIndex = row
            self.freeCapacity = initialCapacity
            self.initialCapacity = initialCapacity
        }
        
        
        var debugDescription: String {
            return "\\(rowIndex)"
        }
        
        
        func debugString(for list: ListType) -> String {
            let prev: RowNode?
            let next: RowNode?
            
            switch list {
            case .capacity:
                prev = previousCapacity
                next = nextCapacity
            case .sameCapacity:
                prev = previousSameCapacityRow
                next = nextSameCapacityRow
            case .scatter:
                prev = previousScatterRow
                next = nextScatterRow
            }
            
            
            let prevStr = prev != nil ? String(prev!.rowIndex) : "nil"
            let nextStr = next != nil ? String(next!.rowIndex) : "nil"
            
            return "\\(rowIndex) (\\(prevStr)/\\(nextStr))"
        }
        
        static func printGatherList(start: RowNode?) {
            let outer_list: ListType = .capacity
            for node in listToArray(start, list: outer_list) {
                let inner_list: ListType = .sameCapacity
                let sameCapacityList_desc = listToArray(node, list: inner_list).map({ $0.debugString(for: inner_list) }).joined(separator: " -- ")
                print(node.debugString(for: outer_list))
                print("\u2523\u2578\\(sameCapacityList_desc)")
            }
        }
        
        static func printCapacityList(start: RowNode?) {
            let list: ListType = .capacity
            print(listToArray(start, list: list).map({ $0.debugString(for: list) }).joined(separator: " -- "))
        }
        
        static func printSameCapacityList(start: RowNode?) {
            let list: ListType = .sameCapacity
            print(listToArray(start, list: list).map({ $0.debugString(for: list) }).joined(separator: " -- "))
        }
        
        static func printScatterList(start: RowNode?) {
            let list: ListType = .scatter
            print(listToArray(start, list: list).map({ $0.debugString(for: list) }).joined(separator: " -- "))
        }
        
        static func listToArray(_ rowNode: RowNode?, list: ListType) -> [RowNode] {
            guard let rowNode = rowNode else { return [] }
            let sequence = ListSequencer(rowNode: rowNode, list: list)
            let result = sequence.reduce(into: []) { partialResult, rowNode in
                partialResult.append(rowNode)
            }
            return result
        }
    }
    
    
    
    
    var capacityListHead: RowNode?
    var scatterListHead: RowNode?
    var totalFreeSeats: Int
    let n: Int?
    let m: Int?
    
    init(_ count: Int, initial_k: Int = 40) {
        
        var sameCapacityTail: RowNode?
        var sameCapacityHead: RowNode?
        for i in 0..<count {
            let newRow = RowNode(row: i, initialCapacity: initial_k)
            if sameCapacityHead == nil {
                sameCapacityHead = newRow
            }
            sameCapacityTail?.nextScatterRow = newRow
            sameCapacityTail?.nextSameCapacityRow = newRow
            newRow.previousScatterRow = sameCapacityTail
            newRow.previousSameCapacityRow = sameCapacityTail
            sameCapacityTail = newRow
        }
        
        sameCapacityHead?.sameCapacityTail = sameCapacityTail        
        scatterListHead = sameCapacityHead
        capacityListHead = sameCapacityHead
        totalFreeSeats = count * initial_k
        n = count
        m = initial_k
    }
    
    struct InitModel {
        let k: Int
        let rows: [Int]
        init(k: Int, rows: [Int]) {
            self.k = k
            self.rows = rows
            let sorted = rows.sorted { a, b in
                a < b
            }
            assert(sorted == rows, "the indexes should be sorted in descendent order")
        }
        
    }
    
    init(_ model: [InitModel]) {
        var uniqueIndexes: Set<Int> = []
        var capacityHead: RowNode?
        var capacityTail: RowNode?
        var totalFreeSeats = 0
        for model_i in 0..<model.count {
            let initial_k = model[model_i].k
            let rows = model[model_i].rows
            var sameCapacityHead: RowNode?
            var sameCapacityTail: RowNode?
            
            totalFreeSeats += rows.count * initial_k
            
            for row_i in 0..<rows.count {
                let row_row = rows[row_i]
                
                assert(!uniqueIndexes.contains(row_row))
                uniqueIndexes.insert(row_row)
                
                let newRow = RowNode(row: row_row, initialCapacity: initial_k)
                
                if row_i == 0 {
                    sameCapacityHead = newRow
                }
                
                sameCapacityTail?.nextSameCapacityRow = newRow
                newRow.previousSameCapacityRow = sameCapacityTail
                
                sameCapacityTail = newRow
                
            }
            
            sameCapacityHead?.sameCapacityTail = sameCapacityTail
            
            if model_i == 0 {
                capacityHead = sameCapacityHead
            }
            
            capacityTail?.nextCapacity = sameCapacityHead
            sameCapacityHead?.previousCapacity = capacityTail
            
            capacityTail = sameCapacityHead
        }
        
        self.capacityListHead = capacityHead
        self.totalFreeSeats = totalFreeSeats
        n = nil
        m = nil
    }
    
    
    func printGatherList() {
        RowNode.printGatherList(start: capacityListHead)
    }
    
    func printScatterList() {
        RowNode.printScatterList(start: scatterListHead)
    }
    
    // the case for swapping the head of the sameCapacity list affects the Capacity list
    mutating func swapSameCapacityRows(first: RowNode, second: RowNode) {
        swap(node1: first, node2: second, listType: .sameCapacity)
        replaceSameCapacityHead(first: first, second: second)
        if first == capacityListHead {
            capacityListHead = second
        }
    }
    
    // extremely useful for debugging purposes, trade off: easy to use but performance killers
    public func sameCapacityList(at: RowNode) -> [RowNode] {
        let list: ListType = .sameCapacity
        return RowNode.listToArray(at, list: list)
    }
    
    public func capacityList() -> [RowNode] {
        let list: ListType = .capacity
        return RowNode.listToArray(capacityListHead!, list: list)
    }
    
    func replaceSameCapacityHead(first: RowNode, second: RowNode) {
        
        func replaceSameCapacityTail(first: RowNode, second: RowNode) {
            guard (first.isSameCapacityTail || second.isSameCapacityTail) else {
                return
            }
            
            precondition(first.isSameCapacityTail != second.isSameCapacityTail)
            let tail = first.isSameCapacityTail ? first : second
            let other = first.isSameCapacityTail ? second : first
            
            let head = tail.sameCapacityHead
            head?.sameCapacityTail = other
        }
                
        guard (first.isCapacityRow || second.isCapacityRow) else {
            replaceSameCapacityTail(first: first, second: second)
            return
        }
        
        precondition(first.isCapacityRow != second.isCapacityRow)
        
        let head = first.isCapacityRow ? first : second
        let other = first.isCapacityRow ? second : first
        
        let headNextCapacity = head.nextCapacity
        let headPreviousCapacity = head.previousCapacity
        let otherNextCapacity = other.nextCapacity
        let otherPreviousCapacity = other.previousCapacity
        
        assert(otherPreviousCapacity == nil)
        assert(otherNextCapacity == nil)
        
        other.nextCapacity = headNextCapacity
        other.previousCapacity = headPreviousCapacity
        headNextCapacity?.previousCapacity = other
        headPreviousCapacity?.nextCapacity = other
        
        head.nextCapacity = otherNextCapacity
        head.previousCapacity = otherPreviousCapacity
        
        let sameCapacityTail = head.sameCapacityTail
        assert(sameCapacityTail != nil)
        assert(other.sameCapacityTail == nil || other.sameCapacityTail! == other)
        head.sameCapacityTail = nil
        if other == sameCapacityTail {
            other.sameCapacityTail = head            
        } else {
            other.sameCapacityTail = sameCapacityTail
        }
        
    }
    
    
    /* private */ func delete(row: RowNode, list: ListType) {
        var node = Prism(listType: list, underlyingRow: row)
        var previous = node?.previous
        var next = node?.next
        
        node?.previous = nil
        node?.next = nil
        previous?.next = next
        next?.previous = previous
        
    }
    
    
    func insert(row: RowNode, after: RowNode, list: ListType) {
        var after = Prism(listType: list, underlyingRow: after)!
        var node = Prism(listType: list, underlyingRow: row)
        var afterNext = after.next
        
        assert(node?.previous == nil)
        assert(node?.next == nil)
        
        after.next = node
        node?.previous = after
        
        afterNext?.previous = node
        node?.next = afterNext
        
        switch list {
        case .capacity:
            node?.underlyingRow?.sameCapacityTail = node?.underlyingRow
        case .sameCapacity:
            if after.isSameCapacityTail {
                let head = after.underlyingRow?.sameCapacityHead
                head?.sameCapacityTail = row
            }
        case .scatter:
            break
        }
        
        
    }
    
    mutating func insertCapacityRow(row: RowNode, before: RowNode) {
        insert(row: row, after: before, list: .capacity)
        swap(node1: before, node2: row, listType: .capacity)
        if before == capacityListHead {
            capacityListHead = row
        }
    }
    
    mutating func insertSameCapacityRow(row: RowNode, before: RowNode) {
        insert(row: row, after: before, list: .sameCapacity)
        swapSameCapacityRows(first: before, second: row)
    }
    
    mutating func deleteFromCapacityList(row: RowNode, deleteFromScatterList: Bool) {
        precondition(row.isCapacityRow)
        let nextScatterRow = row.nextScatterRow
        if let next = row.nextSameCapacityRow {
            let oldSameCapacityTail = row.sameCapacityTail
            swapSameCapacityRows(first: row, second: next)
            delete(row: row, list: .sameCapacity)
            row.sameCapacityTail = nil
            next.sameCapacityTail = oldSameCapacityTail
        } else {
            let next = row.nextCapacity
            delete(row: row, list: .capacity)
            row.sameCapacityTail = nil
            if row == capacityListHead {
                capacityListHead = next
            }
        }
        
        if deleteFromScatterList {
            delete(row: row, list: .scatter)
            if row == scatterListHead {
                scatterListHead = nextScatterRow
            }
        }
        
        row.nextCapacity = nil
        row.previousCapacity = nil
        assert(row.sameCapacityHead == nil)
    }
    
    
    func swap(node1: RowNode, node2: RowNode?, listType: ListType) {
        
        var node1 = Prism(listType: listType, underlyingRow: node1)
        var node2 = Prism(listType: listType, underlyingRow: node2)
        
        var node1_next: Prism? = Prism(listType: listType, underlyingRow: node1?.next?.underlyingRow)
        var node1_prev: Prism? = Prism(listType: listType, underlyingRow: node1?.previous?.underlyingRow)
        var node2_next: Prism? = Prism(listType: listType, underlyingRow: node2?.next?.underlyingRow)
        var node2_prev: Prism? = Prism(listType: listType, underlyingRow: node2?.previous?.underlyingRow)
        
        node1?.next = node2_next
        node2?.previous = node1_prev
        
        if node1_next == node2 {
            node1?.previous = node2
        } else {
            node1?.previous = node2_prev
            node1_next?.previous = node2
        }
        
        if node2_prev == node1 {
            node2?.next = node1
        } else {
            node2_prev?.next = node1
            node2?.next = node1_next
        }
        
        node2_next?.previous = node1
        node1_prev?.next = node2
        
        
    }
    
    mutating func gather(k: Int, maxRow: Int) -> [Int] {
        
        precondition(k > 0, "invalid argument from LeetCode")
        
        guard let capacityListHead = capacityListHead else { return [] }
        
        guard let rowChoice = gatherRowChoice(capacityListHead: capacityListHead, k: k, maxRow: maxRow) else { return [] }
        let updatedCapacity = rowChoice.freeCapacity - k
        let result = updateCapacityRow(rowChoice: rowChoice, newCapacity: updatedCapacity)
        if result != [] {
            totalFreeSeats -= k
        }
        return result
    }
    
    mutating func scatter(k: Int, maxRow: Int) -> Bool {
        assert(self.m != nil, "m is nil can't use scatter")
        return scatter(k: k, maxRow: maxRow, m: m!)
    }
    
    mutating func scatter(k: Int, maxRow: Int, m: Int) -> Bool {
        
        precondition(k > 0, "invalid argument from LeetCode")
        
        guard k <= totalFreeSeats else { return false }
        
        guard k <= ((maxRow + 1) * m) else { return false }
        
        guard let scatterListHead = scatterListHead else { return false }
        
    
        // check they fit
        var capacity_counter = 0
        var can_seat_them_all = false
        var next: RowNode? = scatterListHead
        while let rowChoice = next {
            guard rowChoice.rowIndex <= maxRow else {
                break
            }
            
            capacity_counter += rowChoice.freeCapacity
            if capacity_counter >= k {
                can_seat_them_all = true
                break
            }
            next = rowChoice.nextScatterRow
        }
        
        // update
        guard can_seat_them_all else { return false }
        
        var seat_so_far = 0
        next = scatterListHead
        while let rowChoice = next, seat_so_far < k {
            
            Swift.assert(rowChoice.rowIndex <= maxRow)
                     
            let pending_seat = k - seat_so_far
            
            // just allocate what you need
            let this_row_seat_count = rowChoice.freeCapacity > pending_seat ? pending_seat : rowChoice.freeCapacity
            
            seat_so_far += this_row_seat_count
                        
            // "fix up"
            let updatedCapacity = rowChoice.freeCapacity - this_row_seat_count
            next = rowChoice.nextScatterRow // before updating
            let result = updateCapacityRow(rowChoice: rowChoice, newCapacity: updatedCapacity)
            assert(result != [])
            
            
        }
        
        assert(seat_so_far == k)
        totalFreeSeats -= k
        return can_seat_them_all
        
    }
    
        

    
    mutating func updateCapacityRow(rowChoice: RowNode, newCapacity: Int) -> [Int] {
                
        let firstFreeSeat = rowChoice.firstFreeSeat
        
        let rowChoiceNext = rowChoice.nextCapacity
                
        guard let rowChoiceNext = rowChoiceNext else { // can't use the code after
            // either 'rowChoice' is the last element in the list. (single element list or not)
            // just update in-place if other row in the sameCapacityList
            if newCapacity == 0 {
                deleteFromCapacityList(row: rowChoice, deleteFromScatterList: true)
            } else {
                if let nextSameCapacityRow = rowChoice.nextSameCapacityRow {
                    deleteFromCapacityList(row: rowChoice, deleteFromScatterList: false)
                    assert(nextSameCapacityRow.isCapacityRow == true)
                    insert(row: rowChoice, after: nextSameCapacityRow, list: .capacity)
                }
                rowChoice.freeCapacity = newCapacity
            }
            return [rowChoice.rowIndex, firstFreeSeat]
        }
        
                
        let newCapacityListPosition = capacityListInsertPosition(updatedCapacity: newCapacity, searchFrom: rowChoiceNext)
        
        deleteFromCapacityList(row: rowChoice, deleteFromScatterList: newCapacity == 0)
        
        guard newCapacity > 0 else {
            rowChoice.freeCapacity = 0
            return [rowChoice.rowIndex, firstFreeSeat]
        }
        
        switch newCapacityListPosition {
            
        case let .before(beforeNode):
            assert(rowChoice != beforeNode)
            insertCapacityRow(row: rowChoice, before: beforeNode)
            rowChoice.freeCapacity = newCapacity
        case let .after(afterNode):
            assert(rowChoice != afterNode)
            assert(afterNode.freeCapacity > newCapacity)
            // insert in capacity list
            insert(row: rowChoice, after: afterNode, list: .capacity)
            rowChoice.freeCapacity = newCapacity
        case let .at(atNode):
            assert(rowChoice != atNode)
            // insert in sameCapacity list
            let sameCapacityListPosition = sameCapacityListInsertPosition(rowIndex: rowChoice.rowIndex, sameCapacityListHead: atNode, updatedCapacity: newCapacity)
            switch sameCapacityListPosition {
            case let .before(beforeNode):
                assert(beforeNode == atNode)
                // become root row
                insertSameCapacityRow(row: rowChoice, before: atNode)
                rowChoice.freeCapacity = newCapacity
            case let .after(afterNode):
                insert(row: rowChoice, after: afterNode, list: .sameCapacity)
                rowChoice.freeCapacity = newCapacity
                
            }
        }
        
        return [rowChoice.rowIndex, firstFreeSeat]
    }
    
    func gatherRowChoice(k: Int, maxRow: Int) -> RowNode? {
        return gatherRowChoice(capacityListHead: capacityListHead, k: k, maxRow: maxRow)
    }
    
    func gatherRowChoice(capacityListHead: RowNode?, k: Int, maxRow: Int) -> RowNode? {
        guard let capacityListHead = capacityListHead else { return nil }
        let list: ListType = .capacity
        let sequence = RowNode.ListSequencer(rowNode: capacityListHead, list: list)
        var minRow: RowNode?
        for row in sequence {
            guard row.freeCapacity >= k else { break } // sorted by capacity
            guard row.rowIndex <= maxRow else { continue }
            if let minRowRow = minRow?.rowIndex {
                if row.rowIndex < minRowRow {
                    minRow = row
                }
            } else {
                minRow = row
            }
        }
        return minRow
    }
    
    public enum SameCapacityListInsertPosition<T: Equatable>: Equatable {
        case before(T)
        case after(T)
        
        func map<C>(_ map: (T) -> C) -> CapacityListInsertPosition<C> {
            switch self {
            case .before(let t):
                return .before(map(t))
            case .after(let t):
                return .after(map(t))
            }
        }
    }
    
    func sameCapacityListInsertPosition(rowIndex: Int, sameCapacityListHead: RowNode, updatedCapacity: Int) -> SameCapacityListInsertPosition<RowNode> {
        assert(sameCapacityListHead.freeCapacity == updatedCapacity)
        return sameCapacityListInsertPosition(rowIndex: rowIndex, sameCapacityListHead: sameCapacityListHead)
    }
    
    func sameCapacityListInsertPosition(rowIndex: Int, sameCapacityListHead: RowNode) -> SameCapacityListInsertPosition<RowNode> {
        // one of the 3 searches: sameCapacity list
        
        let list: ListType = .sameCapacity
        
        let direction: Leet2286_solution4.RowNode.ListSequencer.Iterator.Direction
        let start: RowNode
        if abs(sameCapacityListHead.rowIndex - rowIndex) < abs(sameCapacityListHead.sameCapacityTail!.rowIndex - rowIndex) {
            direction = .forward
            start = sameCapacityListHead
            
            let sequence = RowNode.ListSequencer(rowNode: start, list: list, direction: direction)
            var last: RowNode?
            for (_, row) in sequence.enumerated() {
                assert(row.freeCapacity == sameCapacityListHead.freeCapacity)
                if row.rowIndex <= rowIndex { // sorted from small to big
                    last = row
                } else {
                    break
                }
            }
            
            if let last = last {
                return .after(last)
            } else {
                return .before(start)
            }
        } else {
            direction = .backward
            start = sameCapacityListHead.sameCapacityTail!
            
            let sequence = RowNode.ListSequencer(rowNode: start, list: list, direction: direction)
            var last: RowNode?
            for (_, row) in sequence.enumerated() {
                assert(row.freeCapacity == sameCapacityListHead.freeCapacity)
                if row.rowIndex > rowIndex { // sorted from small to big
                    last = row
                } else {
                    break
                }
            }
            
            if let last = last {
                return .before(last)
            } else {
                return .after(start)
            }
        }
        
        
    }
    
    
    func capacityListInsertPosition(updatedCapacity: Int) -> CapacityListInsertPosition<RowNode> {
        return capacityListInsertPosition(updatedCapacity: updatedCapacity, searchFrom: capacityListHead!)
    }
    
    public enum CapacityListInsertPosition<T: Equatable>: Equatable {
        case before(T)
        case after(T)
        case at(T)
        
        func map<C>(_ map: (T) -> C) -> CapacityListInsertPosition<C> {
            switch self {
            case .before(let t):
                return .before(map(t))
            case .after(let t):
                return .after(map(t))
            case .at(let t):
                return .at(map(t))
            }
        }
    }
    
    // nil means the first node in the list
    func capacityListInsertPosition(updatedCapacity: Int, searchFrom: RowNode) -> CapacityListInsertPosition<RowNode> {
        // one of the 3 searches: search on capacity list
        let list: ListType = .capacity
        let sequence = RowNode.ListSequencer(rowNode: searchFrom, list: list)
        var lastGreaterThanOrEqual: RowNode?
        for row in sequence {
            if row.freeCapacity >= updatedCapacity {
                lastGreaterThanOrEqual = row
            } else {
                break
            }
        }
        
        if let lastGreaterThanOrEqual = lastGreaterThanOrEqual {
            return lastGreaterThanOrEqual.freeCapacity == updatedCapacity ? .at(lastGreaterThanOrEqual) : .after(lastGreaterThanOrEqual)
        } else {
            return .before(searchFrom)
        }
    }
    
}


class BookMyShow: Leet2286_SolutionProtocol {

    var solution: Leet2286_solution4
    
    required init(_ n: Int, _ m: Int) {
        solution = .init(n, initial_k: m)
    }
    
    func gather(_ k: Int, _ maxRow: Int) -> [Int] {
        return solution.gather(k: k, maxRow: maxRow)
    }
    
    func scatter(_ k: Int, _ maxRow: Int) -> Bool {
        return solution.scatter(k: k, maxRow: maxRow)
    }
}

protocol Leet2286_SolutionProtocol {
    init(_ n: Int, _ m: Int)
    func gather(_ k: Int, _ maxRow: Int) -> [Int]    
    func scatter(_ k: Int, _ maxRow: Int) -> Bool

}

```