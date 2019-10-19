class Tree {
  constructor(args) {
    this.position = {
      x: args.position.x,
      y: args.position.y
    };
    this.branch = {
      length: args.branch.length,
      lengthScale: args.branch.scale,
      width: args.branch.width,
      widthScale: args.branch.widthScale,
      angle: args.branch.angle
    },
    this.stochastic = args.stochastic;

  }
}