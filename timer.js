const beep = (args) => {
  if (args.length === 0) {
    return;
  }
  args = args.filter((e) => Number(e) !== "NaN" && Number(e) > 0);
  args.sort((a, b) => a - b);
  for (let i = 0; i < args.length; i++) {
    args[i] = Number(args[i]);
    setTimeout(() => {
      process.stdout.write(`. ${args[i]} seconds \n`);
    }, 1000 * args[i]);
  }
};

const args = process.argv.slice(2);
beep(args);
