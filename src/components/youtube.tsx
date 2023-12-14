'use client'

import LiteYouTubeEmbed from "react-lite-youtube-embed"
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css"

export function YouTube (props: { embedCode: string, title: string }): JSX.Element {
    return <LiteYouTubeEmbed title={props.title} id={props.embedCode} />
}
