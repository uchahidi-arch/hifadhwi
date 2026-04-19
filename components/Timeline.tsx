type TimelineItem = {
  year: string
  event: string
}

type TimelineProps = {
  items: TimelineItem[]
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative w-full max-w-2xl mx-auto" style={{ background: "#F5EFE8" }}>
      {/* Ligne verticale centrale continue */}
      <div
        className="absolute top-0 bottom-0"
        style={{ left: "50%", transform: "translateX(-0.5px)", width: "1px", background: "#C9B99A" }}
      />

      <div className="flex flex-col">
        {items.map((item, index) => {
          const isLeft = index % 2 === 0
          return (
            <div
              key={index}
              className="relative flex items-center"
              style={{ paddingBottom: index < items.length - 1 ? "4rem" : 0 }}
            >
              {/* Côté gauche */}
              <div className="flex-1 flex justify-end" style={{ paddingRight: "2rem" }}>
                {isLeft ? (
                  <div className="text-right">
                    <span
                      className="text-sm font-bold tracking-wide"
                      style={{
                        border: "1px solid #C9B99A",
                        color: "#1A1008",
                        borderRadius: "0.25rem",
                        padding: "0.2rem 0.6rem",
                        display: "inline-block",
                        marginBottom: "0.4rem",
                      }}
                    >
                      {item.year}
                    </span>
                    <p className="leading-relaxed" style={{ color: "#1A1008", fontSize: "0.95rem", maxWidth: "18rem" }}>
                      {item.event}
                    </p>
                  </div>
                ) : null}
              </div>

              {/* Point central */}
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  transform: "translate(-50%, 0)",
                  width: "0.6rem",
                  height: "0.6rem",
                  borderRadius: "50%",
                  background: "#8B3A3A",
                  flexShrink: 0,
                  zIndex: 1,
                }}
              />

              {/* Côté droit */}
              <div className="flex-1 flex justify-start" style={{ paddingLeft: "2rem" }}>
                {!isLeft ? (
                  <div>
                    <span
                      className="text-sm font-bold tracking-wide"
                      style={{
                        border: "1px solid #C9B99A",
                        color: "#1A1008",
                        borderRadius: "0.25rem",
                        padding: "0.2rem 0.6rem",
                        display: "inline-block",
                        marginBottom: "0.4rem",
                      }}
                    >
                      {item.year}
                    </span>
                    <p className="leading-relaxed" style={{ color: "#1A1008", fontSize: "0.95rem", maxWidth: "18rem" }}>
                      {item.event}
                    </p>
                  </div>
                ) : null}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
