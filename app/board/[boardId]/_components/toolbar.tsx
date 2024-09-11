const Toolbar = () => {
  return (
    <div className="absolute rounded-md top-[50%] -translate-y-[50%] right-2 shadow-md gap-y-4 flex flex-col">
      <div className="bg-white flex flex-col gap-1 p-1.5 rounded-md items-center">
        <div>Pencil</div>
        <div>Square</div>
        <div>Circle</div>
      </div>
      <div className="bg-white flex flex-col gap-1 p-1.5 rounded-md items-center">
        <div>Undo</div>
        <div>Redo</div>
      </div>
    </div>
  )
}

export default Toolbar
