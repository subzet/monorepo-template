import isEven from '@monorepo/utils';

async function main() {
  const number = 2;

  if (isEven(number)) {
    console.log(`${number} is even`);
  }
}

void main()
  .catch((error) => console.error(error))
  .then(() => process.exit());
