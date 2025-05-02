async function takeTime() {
  await new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
}

const About = async () => {
  await takeTime();
  throw new Error(`this is new error`);

  return (
    <div>
      <h1>About Us</h1>
    </div>
  );
};
export default About;
