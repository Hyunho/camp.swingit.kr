export function YoutubeVideo({
  videoId,
  title = 'YouTube video player',
}: {
  videoId: string
  title?: string
}) {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-800">
      <iframe
        className="absolute inset-0 h-full w-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  )
}
