# Simple Erlang Solution (BFS using digraph:graph())

**Author:** anhvuk13
**Votes:** 0
**Link:** [https://leetcode.com/problems/flood-fill/solutions/2122703/](https://leetcode.com/problems/flood-fill/solutions/2122703/)

---

```erlang
-spec flood_fill(Image :: [[integer()]], Sr :: integer(), Sc :: integer(), NewColor :: integer()) -> [[integer()]].
flood_fill([Row | _] = Image, Sr, Sc, NewColor) ->
    Graph = digraph:new(),
    ok = matrix_to_graph(Image, Graph),
    draw_vertex_neighbor(Graph),
    {{Sr, Sc}, OldColor} = digraph:vertex(Graph, {Sr, Sc}),
    case OldColor == NewColor of
        true ->
            digraph:delete(Graph),
            Image;
        false ->
            bfs(Graph, [{Sr, Sc}], OldColor, NewColor),
            NewImage = graph_to_matrix(Graph, length(Image) - 1, length(Row) - 1),
            digraph:delete(Graph),
            NewImage
    end.

bfs(Graph, [], _OldColor, _NewColor) ->
    ok;
bfs(Graph, [Cell | Cells], OldColor, NewColor) ->
    digraph:add_vertex(Graph, Cell, NewColor),
    Neighbours0 = digraph:out_neighbours(Graph, Cell),
    NeighbourHasTheSameColor = fun(X) ->
                                      {X, Color} = digraph:vertex(Graph, X),
                                      Color == OldColor
                               end,
    Neighbours1 = lists:filter(NeighbourHasTheSameColor, Neighbours0),
    bfs(Graph, Cells ++ Neighbours1, OldColor, NewColor).

draw_vertex_neighbor(Graph) ->
    Vertices = digraph:vertices(Graph),
    DrawEdge = fun(Vertex1, Vertex2) ->
                   case digraph:vertex(Graph, Vertex2) of
                       false ->
                           no_edge;
                       _ ->
                           digraph:add_edge(Graph, Vertex1, Vertex2)
                   end
               end,
    [{DrawEdge({X, Y}, {X - 1, Y}),
     DrawEdge({X, Y}, {X + 1, Y}),
     DrawEdge({X, Y}, {X, Y - 1}),
     DrawEdge({X, Y}, {X, Y + 1})} || {X, Y} <- Vertices].

graph_to_matrix(Graph, RowMaxId, ColMaxId) ->
    graph_to_matrix(Graph, RowMaxId, ColMaxId, ColMaxId, [], []).

graph_to_matrix(Graph, -1, _ColMaxId, _ColMaxId, [], Matrix) ->
    Matrix;
graph_to_matrix(Graph, RowId, -1, ColMaxId, Row, Matrix) ->
    graph_to_matrix(Graph, RowId - 1, ColMaxId, ColMaxId, [], [Row | Matrix]);
graph_to_matrix(Graph, RowId, ColId, ColMaxId, Row, Matrix) ->
    {{RowId, ColId}, Label} = digraph:vertex(Graph, {RowId, ColId}),
    graph_to_matrix(Graph, RowId, ColId - 1, ColMaxId, [Label | Row], Matrix).

matrix_to_graph([Row | Rows], Graph) ->
    matrix_to_graph(Row, Rows, 0, 0, Graph).

matrix_to_graph([], [], _RowId, _ColId, _Graph) ->
    ok;
matrix_to_graph([], [Row | Rows], RowId, _ColId, Graph) ->
    matrix_to_graph(Row, Rows, RowId + 1, 0, Graph);
matrix_to_graph([Cell | Cells], Rows, RowId, ColId, Graph) ->
    digraph:add_vertex(Graph, {RowId, ColId}, Cell),
    matrix_to_graph(Cells, Rows, RowId, ColId + 1, Graph).
```