import Timer from '../sections/Timer';

export default function presentation() {
  return (
    <div>
      <div className="absolute bottom-0 w-full">
        <Timer type />
      </div>
      <video loop width="1920" height="680" controls>
        <source src="presentation_vid.mp4" type="video/mp4" />
        <track
          src="captions_en.vtt"
          kind="captions"
          srcLang="en"
          label="english_captions"
        />
      </video>
    </div>
  );
}
