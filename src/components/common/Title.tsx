const Title = ({ title }: { title: string }) => {
  return (
    <h2 className="text-3xl font-bold uppercase mb-8 text-[--text-q]">
      {title}
    </h2>
  );
};

export default Title;
