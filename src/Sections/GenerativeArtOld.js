{fullScreenBilliards &&
				createPortal(
					<Row>
						{/* {
							[0, 1, 2, 3].map((_, i) => {
								return <Col sm={6} key={i}>
									<Billiards bypassCanvas={true} index={canvasIndex++} width={width * 0.45} height={height * 0.45} limit={full.limit}
										WipeSize={full.wipeSize} ballRadiusLowerLimit={full.ballRadiusLowerLimit / 4}
										ballRadiusUpperLimit={ballRadiusUpperLimit / 4} />
								</Col>
							})
						} */}
						<Col sm={12} >
							<Billiards bypassCanvas={false} index={canvasIndex++} width={width * 0.8} height={height * 0.8} limit={full.limit}
								WipeSize={full.wipeSize} ballRadiusLowerLimit={full.ballRadiusLowerLimit}
								ballRadiusUpperLimit={full.ballRadiusUpperLimit} />
						</Col>
					</Row>,
					Swal.getHtmlContainer()
				)}
			{fullScreenSierpinskiTriangle &&
				createPortal(
					<Row>
						<Col sm={12}>
							<SierpinskiTriangle index={canvasIndex++} width={1000} height={800} />
						</Col>
					</Row>,
					Swal.getHtmlContainer()
				)}

			{fullScreenGameofLife &&
				createPortal(
					<Row>
						<Col sm={12}>
							<GameOfLife index={canvasIndex++} width={1200} height={1200} />
						</Col>
					</Row>,
					Swal.getHtmlContainer()
				)}