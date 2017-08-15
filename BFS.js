(function() {

var size = 4
var Graph = {
	adjlist: [[],[],[],[]],
	visited: new Array(size).fill(0),
	queue: [],
	addEdge: function(src,dest) {
			this.adjlist[src].push(dest)
		},
	BFS: function(root) {
			this.queue.push(root)
			this.visited[root] = 1
			while (this.queue.length > 0) {
				var vertex = this.queue.shift()
				console.log(vertex)
				for(var i=0;i<this.adjlist[vertex].length;i++) {
					var adjvertex = this.adjlist[vertex][i]
					if (!(this.visited[adjvertex])) {
						this.visited[adjvertex] = 1
						this.queue.push(adjvertex)
					}
				}
			}
		}
	}

Graph.addEdge(0,1)
Graph.addEdge(0,2)
Graph.addEdge(1,2)
Graph.addEdge(2,0)
Graph.addEdge(2,3)
Graph.addEdge(3,3)
Graph.BFS(2)
}())

					
