import React from 'react';
import YouTube from 'react-youtube';
import type { YouTubeEvent } from 'react-youtube';

interface VideoPlayerProps {
  videoId: string;
  onReady: (event: YouTubeEvent) => void;
  onEnd: () => void;
  isReady: boolean;
  isMobile: boolean;
}

export function VideoPlayer({ videoId, onReady, onEnd, isReady, isMobile }: VideoPlayerProps) {
  const opts = {
    width: '1280',
    height: '720',
    playerVars: {
      autoplay: 1,
      controls: 1,
      disablekb: 1,
      modestbranding: 1,
      mute: 1,
      playsinline: 1,
      rel: 0,
      showinfo: 0,
      loop: 1,
      vq: 'hd720'
    }
  };

  const handleStateChange = (event: YouTubeEvent) => {
    if (event.data === 1) {
      event.target.setPlaybackQuality('hd720');
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
      <div className="w-full max-w-[1280px] aspect-video">
        <YouTube
          videoId={videoId}
          opts={opts}
          onReady={onReady}
          onEnd={onEnd}
          onStateChange={handleStateChange}
          className="w-full h-full"
          iframeClassName="w-full h-full"
        />
      </div>
    </div>
  );
}