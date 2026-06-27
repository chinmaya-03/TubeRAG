from youtube_transcript_api import YouTubeTranscriptApi
from urllib.parse import urlparse, parse_qs


def extract_video_id(url: str):
    parsed_url = urlparse(url)

    if parsed_url.hostname == "youtu.be":
        return parsed_url.path[1:]

    if parsed_url.hostname in ("www.youtube.com", "youtube.com"):
        return parse_qs(parsed_url.query)["v"][0]

    return None


def get_transcript(url: str):

    video_id = extract_video_id(url)

    transcript = YouTubeTranscriptApi().fetch(video_id)

    text = " ".join(
        snippet.text
        for snippet in transcript
    )

    # Return both transcript and video ID
    return text, video_id