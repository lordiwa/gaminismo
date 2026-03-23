import { ref, type Ref } from 'vue'

export function useMusic(audioRef: Ref<HTMLAudioElement | null>) {
  const isPlaying = ref(false)

  function toggle() {
    const audio = audioRef.value
    if (!audio) return

    if (isPlaying.value) {
      audio.pause()
    } else {
      audio.play()
    }
    isPlaying.value = !isPlaying.value
  }

  return { isPlaying, toggle }
}
