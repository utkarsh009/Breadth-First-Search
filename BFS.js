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
			var self = this
			self.queue.push(root)
			self.visited[root] = 1
			while (self.queue.length > 0) {
				var vertex = self.queue.shift()
				console.log(vertex)
				for(var i=0;i<self.adjlist[vertex].length;i++) {
					var adjvertex = self.adjlist[vertex][i]
					if (!(self.visited[adjvertex])) {
						self.visited[adjvertex] = 1
						self.queue.push(adjvertex)
					}
				}
			}
		},
	}

Graph.addEdge(0,1)
Graph.addEdge(0,2)
Graph.addEdge(1,2)
Graph.addEdge(2,0)
Graph.addEdge(2,3)
Graph.addEdge(3,3)
Graph.BFS(2)
}())

					
